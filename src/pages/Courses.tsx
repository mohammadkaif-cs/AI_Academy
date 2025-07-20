import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BookOpen, Search, Bookmark, ExternalLink, Star, Heart, Filter, User } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";

interface Course {
  'Sr no': number;
  Course: string;
  Topic: string;
  Format: string;
  Difficulty: string;
  Price: string;
  Link: string;
}

interface UserProgress {
  course_id: number;
  progress_percentage: number;
}

interface UserBookmark {
  course_id: number;
}

const Courses = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);
  const [userProgress, setUserProgress] = useState<UserProgress[]>([]);
  const [userBookmarks, setUserBookmarks] = useState<UserBookmark[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [selectedFormat, setSelectedFormat] = useState("all");
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const { toast } = useToast();

  // Fetch courses from Supabase
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const { data, error } = await supabase
          .from('AI Academy Courses')
          .select('*')
          .order('Sr no');
        
        if (error) throw error;
        
        setCourses(data || []);
        setFilteredCourses(data || []);
      } catch (error) {
        console.error('Error fetching courses:', error);
        toast({
          title: "Error",
          description: "Failed to load courses. Please try again.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [toast]);

  // Fetch user data if authenticated (will work after migration is applied)
  useEffect(() => {
    const fetchUserData = async () => {
      if (!user) return;

      try {
        // For now, use localStorage to store user data until migration is applied
        const savedProgress = localStorage.getItem(`user_progress_${user.id}`);
        const savedBookmarks = localStorage.getItem(`user_bookmarks_${user.id}`);
        
        if (savedProgress) {
          setUserProgress(JSON.parse(savedProgress));
        }
        
        if (savedBookmarks) {
          setUserBookmarks(JSON.parse(savedBookmarks));
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [user]);

  // Filter courses based on search and filters
  useEffect(() => {
    let filtered = courses;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(course =>
        course.Course?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.Topic?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Topic filter
    if (selectedTopic !== "all") {
      filtered = filtered.filter(course => course.Topic === selectedTopic);
    }

    // Difficulty filter
    if (selectedDifficulty !== "all") {
      filtered = filtered.filter(course => course.Difficulty === selectedDifficulty);
    }

    // Format filter
    if (selectedFormat !== "all") {
      filtered = filtered.filter(course => course.Format === selectedFormat);
    }

    setFilteredCourses(filtered);
  }, [courses, searchTerm, selectedTopic, selectedDifficulty, selectedFormat]);

  // Get unique filter options
  const topics = [...new Set(courses.map(course => course.Topic).filter(Boolean))];
  const difficulties = [...new Set(courses.map(course => course.Difficulty).filter(Boolean))];
  const formats = [...new Set(courses.map(course => course.Format).filter(Boolean))];

  // Get user progress for a course
  const getCourseProgress = (courseId: number) => {
    const progress = userProgress.find(p => p.course_id === courseId);
    return progress ? progress.progress_percentage : 0;
  };

  // Check if course is bookmarked
  const isCourseBookmarked = (courseId: number) => {
    return userBookmarks.some(bookmark => bookmark.course_id === courseId);
  };

  // Toggle bookmark (using localStorage for now until migration is applied)
  const toggleBookmark = async (courseId: number) => {
    if (!user) {
      toast({
        title: "Login Required",
        description: "Please login to bookmark courses.",
        variant: "destructive",
      });
      return;
    }

    try {
      const isBookmarked = isCourseBookmarked(courseId);
      
      if (isBookmarked) {
        // Remove bookmark
        const newBookmarks = userBookmarks.filter(b => b.course_id !== courseId);
        setUserBookmarks(newBookmarks);
        localStorage.setItem(`user_bookmarks_${user.id}`, JSON.stringify(newBookmarks));
        
        toast({
          title: "Bookmark Removed",
          description: "Course removed from your bookmarks.",
        });
      } else {
        // Add bookmark
        const newBookmarks = [...userBookmarks, { course_id: courseId }];
        setUserBookmarks(newBookmarks);
        localStorage.setItem(`user_bookmarks_${user.id}`, JSON.stringify(newBookmarks));
        
        toast({
          title: "Bookmark Added",
          description: "Course added to your bookmarks.",
        });
      }
    } catch (error) {
      console.error('Error toggling bookmark:', error);
      toast({
        title: "Error",
        description: "Failed to update bookmark. Please try again.",
        variant: "destructive",
      });
    }
  };

  // Get difficulty color
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty?.toLowerCase()) {
      case 'beginner':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'intermediate':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'advanced':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  // Get format icon
  const getFormatIcon = (format: string) => {
    switch (format?.toLowerCase()) {
      case 'video':
        return '🎥';
      case 'course':
        return '📚';
      case 'tutorial':
        return '📖';
      case 'webinar':
        return '🎤';
      default:
        return '📄';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="container mx-auto px-4 py-24">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-lg text-gray-600">Loading courses...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              AI Academy Courses
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover comprehensive AI courses designed by industry experts. 
              {user ? " Track your progress and bookmark your favorites!" : " Login to track progress and bookmark courses."}
            </p>
          </div>

          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Filters */}
              <div className="flex flex-col sm:flex-row gap-2">
                <Select value={selectedTopic} onValueChange={setSelectedTopic}>
                  <SelectTrigger className="w-full sm:w-[150px]">
                    <SelectValue placeholder="Topic" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Topics</SelectItem>
                    {topics.map(topic => (
                      <SelectItem key={topic} value={topic}>{topic}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                  <SelectTrigger className="w-full sm:w-[150px]">
                    <SelectValue placeholder="Difficulty" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Levels</SelectItem>
                    {difficulties.map(difficulty => (
                      <SelectItem key={difficulty} value={difficulty}>{difficulty}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedFormat} onValueChange={setSelectedFormat}>
                  <SelectTrigger className="w-full sm:w-[150px]">
                    <SelectValue placeholder="Format" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Formats</SelectItem>
                    {formats.map(format => (
                      <SelectItem key={format} value={format}>{format}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Results count */}
            <div className="text-center text-gray-600 mb-8">
              Showing {filteredCourses.length} of {courses.length} courses
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredCourses.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">No courses found</h3>
              <p className="text-gray-600">Try adjusting your search or filters</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course) => {
                const progress = getCourseProgress(course['Sr no']);
                const isBookmarked = isCourseBookmarked(course['Sr no']);

                return (
                  <Card key={course['Sr no']} className="hover:shadow-lg transition-all duration-200 border-0 shadow-md bg-white">
                    <CardHeader className="pb-4">
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">{getFormatIcon(course.Format)}</span>
                          <Badge variant="outline" className="text-xs">
                            {course.Format}
                          </Badge>
                        </div>
                        {user && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleBookmark(course['Sr no'])}
                            className="p-1 h-8 w-8"
                          >
                            {isBookmarked ? (
                              <Heart className="h-4 w-4 fill-red-500 text-red-500" />
                            ) : (
                              <Bookmark className="h-4 w-4" />
                            )}
                          </Button>
                        )}
                      </div>
                      
                      <CardTitle className="text-lg font-semibold text-gray-900 leading-tight">
                        {course.Course}
                      </CardTitle>
                      
                      <div className="flex flex-wrap gap-2 mt-3">
                        <Badge className={getDifficultyColor(course.Difficulty)}>
                          {course.Difficulty}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {course.Topic}
                        </Badge>
                        {course.Price && (
                          <Badge variant="outline" className="text-xs font-semibold text-green-600">
                            {course.Price}
                          </Badge>
                        )}
                      </div>
                    </CardHeader>

                    <CardContent className="pt-0">
                      {/* Progress Bar (only for authenticated users) */}
                      {user && (
                        <div className="mb-4">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-gray-600">Progress</span>
                            <span className="text-sm font-medium text-gray-900">{progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-primary h-2 rounded-full transition-all duration-300"
                              style={{ width: `${progress}%` }}
                            ></div>
                          </div>
                        </div>
                      )}

                      <div className="flex gap-2">
                        <Button 
                          asChild
                          className="flex-1"
                        >
                          <a 
                            href={course.Link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2"
                          >
                            View Resource
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                        
                        {!user && (
                          <Button 
                            variant="outline" 
                            size="sm"
                            asChild
                          >
                            <a href="/auth">
                              <User className="h-4 w-4" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;