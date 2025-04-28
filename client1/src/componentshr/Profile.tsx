
import React from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Briefcase, 
  GraduationCap,
  Book,
  Award,
  BarChart,
  FileText
} from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock user data
const userData = {
  name: 'Naveen Kumar',
  email: 'naveen.kumar@example.com',
  phone: '+1 (555) 123-4567',
  location: 'Bangalore, India',
  role: 'Computer Science Student',
  institution: 'Tech University',
  joinDate: '2021-09-01',
  bio: 'Passionate computer science student with interests in web development, algorithms, and artificial intelligence. Looking to build a career in software engineering.',
  avatar: 'N'
};

// Skills data
const skills = [
  { name: 'JavaScript', level: 'Advanced' },
  { name: 'React', level: 'Intermediate' },
  { name: 'Node.js', level: 'Intermediate' },
  { name: 'Python', level: 'Advanced' },
  { name: 'SQL', level: 'Intermediate' },
  { name: 'Data Structures', level: 'Advanced' },
  { name: 'Algorithms', level: 'Intermediate' },
  { name: 'Machine Learning', level: 'Beginner' }
];

// Education data
const education = [
  {
    degree: 'B.Tech in Computer Science',
    institution: 'Tech University',
    duration: '2021 - 2025',
    description: 'Specializing in Artificial Intelligence and Machine Learning',
    gpa: '3.8/4.0'
  },
  {
    degree: 'Higher Secondary',
    institution: 'City Public School',
    duration: '2019 - 2021',
    description: 'Science stream with Computer Science',
    gpa: '92%'
  }
];

// Achievements data
const achievements = [
  {
    title: 'Dean\'s List',
    date: '2022',
    description: 'Recognized for academic excellence for two consecutive semesters'
  },
  {
    title: 'Hackathon Winner',
    date: '2023',
    description: 'First place in university hackathon for developing an AI-powered study assistant'
  },
  {
    title: 'Coding Competition Finalist',
    date: '2022',
    description: 'Reached finals in national level coding competition'
  }
];

// Enrolled courses summary
const enrolledCoursesSummary = [
  { name: 'Advanced Web Development', progress: 75 },
  { name: 'Data Structures & Algorithms', progress: 45 },
  { name: 'Machine Learning Fundamentals', progress: 90 },
  { name: 'Database Design & Management', progress: 60 },
  { name: 'Mobile App Development', progress: 30 }
];

export const Profile: React.FC = () => {
  return (
    <div className="page-container">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Profile sidebar */}
        <div className="lg:w-1/3">
          <Card className="glass-card h-full">
            <CardHeader className="text-center pb-0">
              <div className="w-24 h-24 rounded-full bg-primary mx-auto flex items-center justify-center mb-4">
                <span className="text-4xl font-bold text-primary-foreground">{userData.avatar}</span>
              </div>
              <CardTitle className="text-2xl">{userData.name}</CardTitle>
              <div className="mt-1">
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                  {userData.role}
                </Badge>
              </div>
              <CardDescription className="mt-3">{userData.bio}</CardDescription>
            </CardHeader>
            
            <CardContent className="mt-6 space-y-4">
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <Mail size={18} className="mr-2 text-muted-foreground" />
                  <span>{userData.email}</span>
                </div>
                <div className="flex items-center text-sm">
                  <Phone size={18} className="mr-2 text-muted-foreground" />
                  <span>{userData.phone}</span>
                </div>
                <div className="flex items-center text-sm">
                  <MapPin size={18} className="mr-2 text-muted-foreground" />
                  <span>{userData.location}</span>
                </div>
                <div className="flex items-center text-sm">
                  <GraduationCap size={18} className="mr-2 text-muted-foreground" />
                  <span>{userData.institution}</span>
                </div>
                <div className="flex items-center text-sm">
                  <Calendar size={18} className="mr-2 text-muted-foreground" />
                  <span>Joined {new Date(userData.joinDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
                </div>
              </div>
            </CardContent>
            
            <CardFooter>
              <Button variant="outline" className="w-full">Edit Profile</Button>
            </CardFooter>
          </Card>
        </div>
        
       
        
      </div>
    </div>
  );
};
