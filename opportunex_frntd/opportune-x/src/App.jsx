import React, { useState } from 'react';
import { Search, User, Briefcase, Users, TrendingUp, Award, BookOpen, Github, Code, FileText, Star, CheckCircle, XCircle, ArrowRight, Target, Lightbulb, GraduationCap, Building, Bell, Moon, Sun, Menu, X } from 'lucide-react';

const App = () =>{
  const [activeTab, setActiveTab] = useState('opportunities');
  const [darkMode, setDarkMode] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [userProfile] = useState({
    name: "Priya Sharma",
    branch: "Computer Science",
    year: "3rd Year",
    cgpa: 8.5,
    skills: ["Python", "React", "Machine Learning", "Django"],
    profileCompletion: 85
  });

  const notifications = [
    {
      id: 1,
      type: "match",
      title: "High Match Alert! 🎯",
      message: "You are 95% match for ML Engineer Intern at Google",
      time: "2 min ago",
      unread: true
    },
    {
      id: 2,
      type: "deadline",
      title: "Application Deadline Soon ⏰",
      message: "Smart Library System project closes in 2 days",
      time: "1 hour ago",
      unread: true
    },
    {
      id: 3,
      type: "shortlist",
      title: "Shortlisted! 🎉",
      message: "You've been shortlisted for Full Stack Developer at StartupHub",
      time: "3 hours ago",
      unread: false
    },
    {
      id: 4,
      type: "new",
      title: "New Opportunity",
      message: "5 new internships matching your profile",
      time: "5 hours ago",
      unread: false
    }
  ];

  const opportunities = [
    {
      id: 1,
      title: "ML Intern - Computer Vision",
      company: "TechCorp AI",
      type: "Internship",
      duration: "3 months",
      stipend: "₹20,000/month",
      fitScore: 92,
      eligible: true,
      requiredSkills: ["Python", "TensorFlow", "Computer Vision"],
      matchedSkills: ["Python"],
      missingSkills: ["TensorFlow", "Computer Vision"],
      postedBy: "Industry",
      deadline: "15 Dec 2025"
    },
    {
      id: 2,
      title: "Campus Project: Smart Library System",
      company: "Dr. Kumar - CSE Dept",
      type: "Academic Project",
      duration: "4 months",
      stipend: "Academic Credits",
      fitScore: 88,
      eligible: true,
      requiredSkills: ["React", "Node.js", "MongoDB"],
      matchedSkills: ["React"],
      missingSkills: ["Node.js", "MongoDB"],
      postedBy: "Faculty",
      deadline: "20 Dec 2025"
    },
    {
      id: 3,
      title: "Full Stack Developer Intern",
      company: "StartupHub",
      type: "Internship",
      duration: "6 months",
      stipend: "₹15,000/month",
      fitScore: 76,
      eligible: false,
      requiredSkills: ["React", "Node.js", "AWS", "Docker"],
      matchedSkills: ["React"],
      missingSkills: ["Node.js", "AWS", "Docker"],
      postedBy: "Industry",
      deadline: "10 Jan 2026"
    }
  ];

  const teamSuggestions = [
    {
      project: "AI Chatbot for Student Queries",
      suggestedMembers: [
        { name: "Rahul Verma", skills: ["NLP", "Python"], year: "3rd" },
        { name: "Ananya Singh", skills: ["React", "UI/UX"], year: "3rd" },
        { name: "Arjun Patel", skills: ["Django", "API"], year: "4th" }
      ],
      matchScore: 94
    }
  ];

  const bgColor = darkMode ? 'bg-gray-900' : 'bg-gray-50';
  const cardBg = darkMode ? 'bg-gray-800' : 'bg-white';
  const textPrimary = darkMode ? 'text-white' : 'text-gray-900';
  const textSecondary = darkMode ? 'text-gray-300' : 'text-gray-600';
  const borderColor = darkMode ? 'border-gray-700' : 'border-gray-200';
  const hoverBg = darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100';

  return (
    <div className={`min-h-screen ${bgColor} transition-colors duration-300`}>
      {/* Header */}
      <header className={`${cardBg} border-b ${borderColor} sticky top-0 z-50 shadow-sm`}>
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl shadow-lg">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className={`text-2xl font-bold ${textPrimary}`}>
                  Opportune<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">X</span>
                </h1>
                <p className={`text-xs ${textSecondary}`}>Smart Campus Portal</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className={`hidden md:flex items-center space-x-2 ${cardBg} border ${borderColor} px-4 py-2 rounded-lg`}>
                <Award className="w-4 h-4 text-yellow-500" />
                <span className={`text-sm ${textPrimary}`}>Profile: {userProfile.profileCompletion}%</span>
              </div>
              
              {/* Notifications */}
              <div className="relative">
                <button
                  onClick={() => setShowNotifications(!showNotifications)}
                  className={`${cardBg} border ${borderColor} p-2 rounded-lg ${hoverBg} transition-colors relative`}
                >
                  <Bell className={`w-5 h-5 ${textPrimary}`} />
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                    2
                  </span>
                </button>
                
                {showNotifications && (
                  <div className={`absolute right-0 mt-2 w-80 ${cardBg} border ${borderColor} rounded-xl shadow-2xl overflow-hidden`}>
                    <div className={`p-4 border-b ${borderColor}`}>
                      <h3 className={`font-bold ${textPrimary}`}>Notifications</h3>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {notifications.map(notif => (
                        <div
                          key={notif.id}
                          className={`p-4 border-b ${borderColor} ${hoverBg} cursor-pointer ${notif.unread ? (darkMode ? 'bg-blue-900/20' : 'bg-blue-50') : ''}`}
                        >
                          <div className="flex items-start space-x-3">
                            <div className={`flex-shrink-0 w-2 h-2 rounded-full mt-2 ${notif.unread ? 'bg-blue-500' : 'bg-gray-400'}`} />
                            <div className="flex-1">
                              <p className={`font-semibold text-sm ${textPrimary}`}>{notif.title}</p>
                              <p className={`text-sm ${textSecondary} mt-1`}>{notif.message}</p>
                              <p className={`text-xs ${textSecondary} mt-1`}>{notif.time}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Dark Mode Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`${cardBg} border ${borderColor} p-2 rounded-lg ${hoverBg} transition-colors`}
              >
                {darkMode ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-gray-700" />}
              </button>

              {/* Profile */}
              <div className={`hidden sm:flex items-center space-x-3 ${cardBg} border ${borderColor} px-4 py-2 rounded-lg`}>
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div className="hidden lg:block">
                  <p className={`text-sm font-semibold ${textPrimary}`}>{userProfile.name}</p>
                  <p className={`text-xs ${textSecondary}`}>{userProfile.branch}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="container mx-auto px-4 sm:px-6 py-6">
        <div className="flex flex-wrap gap-3 mb-6">
          {[
            { id: 'opportunities', icon: Briefcase, label: 'AI Matched' },
            { id: 'profile', icon: User, label: 'Smart Profile' },
            { id: 'teams', icon: Users, label: 'Team Formation' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 sm:px-6 py-3 rounded-xl font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : `${cardBg} border ${borderColor} ${textPrimary} ${hoverBg}`
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Opportunities Tab */}
        {activeTab === 'opportunities' && (
          <div className="space-y-6">
            <div className={`${cardBg} border ${borderColor} rounded-2xl p-6 shadow-sm`}>
              <h2 className={`text-2xl font-bold ${textPrimary} mb-2`}>AI-Powered Opportunities</h2>
              <p className={textSecondary}>Personalized matches based on your skills, CGPA, and interests</p>
            </div>

            {opportunities.map(opp => (
              <div key={opp.id} className={`${cardBg} border ${borderColor} rounded-2xl p-6 hover:shadow-lg transition-all shadow-sm`}>
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-3">
                      <div className={`p-2 rounded-lg ${opp.postedBy === 'Industry' ? 'bg-blue-100 dark:bg-blue-900' : 'bg-purple-100 dark:bg-purple-900'}`}>
                        {opp.postedBy === 'Industry' ? <Building className="w-5 h-5 text-blue-600 dark:text-blue-400" /> : <GraduationCap className="w-5 h-5 text-purple-600 dark:text-purple-400" />}
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-xl font-bold ${textPrimary} mb-1`}>{opp.title}</h3>
                        <p className={textSecondary}>{opp.company}</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <span className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-medium">{opp.type}</span>
                          <span className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-xs font-medium">{opp.duration}</span>
                          <span className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-xs font-medium">{opp.stipend}</span>
                          <span className="bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 px-3 py-1 rounded-full text-xs font-medium">📅 {opp.deadline}</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                      <div>
                        <p className={`text-sm ${textSecondary} mb-2 font-medium`}>✅ Skills You Have:</p>
                        <div className="flex flex-wrap gap-2">
                          {opp.matchedSkills.map(skill => (
                            <span key={skill} className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-3 py-1 rounded-lg text-sm border border-green-300 dark:border-green-700">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className={`text-sm ${textSecondary} mb-2 font-medium`}>📚 Skills to Learn:</p>
                        <div className="flex flex-wrap gap-2">
                          {opp.missingSkills.map(skill => (
                            <span key={skill} className="bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 px-3 py-1 rounded-lg text-sm border border-orange-300 dark:border-orange-700">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-center gap-3">
                    <div className="text-center">
                      <div className="relative w-24 h-24">
                        <svg className="w-24 h-24 transform -rotate-90">
                          <circle cx="48" cy="48" r="40" stroke={darkMode ? "rgba(75, 85, 99, 0.3)" : "rgba(229, 231, 235, 1)"} strokeWidth="8" fill="none" />
                          <circle cx="48" cy="48" r="40" stroke="url(#gradient)" strokeWidth="8" fill="none"
                            strokeDasharray={`${2 * Math.PI * 40}`}
                            strokeDashoffset={`${2 * Math.PI * 40 * (1 - opp.fitScore / 100)}`}
                            strokeLinecap="round" />
                          <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#2563eb" />
                              <stop offset="100%" stopColor="#9333ea" />
                            </linearGradient>
                          </defs>
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className={`text-2xl font-bold ${textPrimary}`}>{opp.fitScore}%</span>
                        </div>
                      </div>
                      <p className={`text-xs ${textSecondary} mt-2`}>Fit Score</p>
                    </div>

                    {opp.eligible ? (
                      <button className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5" />
                        <span>Apply Now</span>
                      </button>
                    ) : (
                      <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center space-x-2">
                        <Target className="w-5 h-5" />
                        <span>Get Eligible</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Profile Tab */}
        {activeTab === 'profile' && (
          <div className="space-y-6">
            <div className={`${cardBg} border ${borderColor} rounded-2xl p-8 shadow-sm`}>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-32 h-32 rounded-2xl flex items-center justify-center shadow-lg">
                  <User className="w-16 h-16 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className={`text-3xl font-bold ${textPrimary} mb-2`}>{userProfile.name}</h2>
                  <p className={`${textSecondary} mb-4`}>{userProfile.branch} • {userProfile.year} • CGPA: {userProfile.cgpa}</p>
                  <div className="flex flex-wrap gap-2">
                    {userProfile.skills.map(skill => (
                      <span key={skill} className={`${darkMode ? 'bg-gray-700' : 'bg-gray-200'} ${textPrimary} px-4 py-2 rounded-lg text-sm font-medium`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className={`${cardBg} border ${borderColor} rounded-2xl p-6 shadow-sm`}>
                <div className="flex items-center space-x-2 mb-4">
                  <Code className="w-6 h-6 text-blue-600" />
                  <h3 className={`text-xl font-bold ${textPrimary}`}>Coding Profiles</h3>
                </div>
                <div className="space-y-3">
                  <div className={`flex items-center justify-between p-3 ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg`}>
                    <span className={textSecondary}>LeetCode</span>
                    <span className="text-green-600 dark:text-green-400 font-semibold">1250 problems</span>
                  </div>
                  <div className={`flex items-center justify-between p-3 ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg`}>
                    <span className={textSecondary}>CodeChef</span>
                    <span className="text-yellow-600 dark:text-yellow-400 font-semibold">4★ Rating</span>
                  </div>
                </div>
              </div>

              <div className={`${cardBg} border ${borderColor} rounded-2xl p-6 shadow-sm`}>
                <div className="flex items-center space-x-2 mb-4">
                  <Github className="w-6 h-6 text-purple-600" />
                  <h3 className={`text-xl font-bold ${textPrimary}`}>GitHub Activity</h3>
                </div>
                <div className="space-y-3">
                  <div className={`flex items-center justify-between p-3 ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg`}>
                    <span className={textSecondary}>Repositories</span>
                    <span className={`${textPrimary} font-semibold`}>24</span>
                  </div>
                  <div className={`flex items-center justify-between p-3 ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg`}>
                    <span className={textSecondary}>Contributions</span>
                    <span className={`${textPrimary} font-semibold`}>850+ this year</span>
                  </div>
                </div>
              </div>

              <div className={`${cardBg} border ${borderColor} rounded-2xl p-6 shadow-sm`}>
                <div className="flex items-center space-x-2 mb-4">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                  <h3 className={`text-xl font-bold ${textPrimary}`}>Academic Projects</h3>
                </div>
                <div className="space-y-2">
                  <p className={textSecondary}>• E-commerce Platform (Django)</p>
                  <p className={textSecondary}>• Sentiment Analysis Tool (NLP)</p>
                  <p className={textSecondary}>• IoT Home Automation</p>
                </div>
              </div>

              <div className={`${cardBg} border ${borderColor} rounded-2xl p-6 shadow-sm`}>
                <div className="flex items-center space-x-2 mb-4">
                  <Award className="w-6 h-6 text-yellow-600" />
                  <h3 className={`text-xl font-bold ${textPrimary}`}>Certifications</h3>
                </div>
                <div className="space-y-2">
                  <p className={textSecondary}>• AWS Cloud Practitioner</p>
                  <p className={textSecondary}>• Python for Data Science</p>
                  <p className={textSecondary}>• React Developer Bootcamp</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Roadmap Tab */}
        {activeTab === 'roadmap' && (
          <div className="space-y-6">
            <div className={`${cardBg} border ${borderColor} rounded-2xl p-6 shadow-sm`}>
              <h2 className={`text-2xl font-bold ${textPrimary} mb-2`}>🚀 Personalized Skill Roadmap</h2>
              <p className={textSecondary}>Complete these to unlock more opportunities</p>
            </div>

            {skillRoadmap.map((item, idx) => (
              <div key={idx} className={`${cardBg} border ${borderColor} rounded-2xl p-6 shadow-sm`}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className={`text-2xl font-bold ${textPrimary} mb-1`}>{item.skill}</h3>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                      item.priority === 'High' ? 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300' : 'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300'
                    }`}>
                      {item.priority} Priority
                    </span>
                  </div>
                  <div className="text-right">
                    <p className={`${textSecondary} text-sm`}>Estimated Time</p>
                    <p className={`${textPrimary} font-bold text-lg`}>{item.estimatedTime}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <BookOpen className="w-5 h-5 text-blue-600" />
                      <h4 className={`text-lg font-semibold ${textPrimary}`}>Recommended Courses</h4>
                    </div>
                    <div className="space-y-2">
                      {item.courses.map((course, i) => (
                        <div key={i} className={`flex items-center space-x-2 p-3 ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg ${hoverBg} transition-all cursor-pointer`}>
                          <Star className="w-4 h-4 text-yellow-500" />
                          <span className={`${textSecondary} text-sm`}>{course}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <Lightbulb className="w-5 h-5 text-purple-600" />
                      <h4 className={`text-lg font-semibold ${textPrimary}`}>Practice Projects</h4>
                    </div>
                    <div className="space-y-2">
                      {item.projects.map((project, i) => (
                        <div key={i} className={`flex items-center space-x-2 p-3 ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg ${hoverBg} transition-all cursor-pointer`}>
                          <Code className="w-4 h-4 text-green-600" />
                          <span className={`${textSecondary} text-sm`}>{project}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center space-x-2">
                  <span>Start Learning Path</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Teams Tab */}
        {activeTab === 'teams' && (
          <div className="space-y-6">
            <div className={`${cardBg} border ${borderColor} rounded-2xl p-6 shadow-sm`}>
              <h2 className={`text-2xl font-bold ${textPrimary} mb-2`}>🤝 AI-Powered Team Formation</h2>
              <p className={textSecondary}>Find the perfect teammates with complementary skills</p>
            </div>

            {teamSuggestions.map((team, idx) => (
              <div key={idx} className={`${cardBg} border ${borderColor} rounded-2xl p-6 shadow-sm`}>
                <div className="flex items-center justify-between mb-6">
                  <h3 className={`text-xl font-bold ${textPrimary}`}>{team.project}</h3>
                  <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 rounded-lg shadow-lg">
                    <Star className="w-5 h-5 text-white" />
                    <span className="text-white font-bold">{team.matchScore}% Match</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  {team.suggestedMembers.map((member, i) => (
                    <div key={i} className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-xl p-4 ${hoverBg} transition-all`}>
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-12 h-12 rounded-full flex items-center justify-center">
                          <User className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className={`${textPrimary} font-semibold`}>{member.name}</p>
                          <p className={`${textSecondary} text-sm`}>{member.year} Year</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {member.skills.map(skill => (
                          <span key={skill} className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-xs">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <button className="w-full mt-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-green-500/30 transition-all">
                  Request Team Formation
                </button>
              </div>
            ))}

            <div className={`${cardBg} border ${borderColor} rounded-2xl p-6 shadow-sm`}>
              <h3 className={`text-xl font-bold ${textPrimary} mb-4`}>Create New Project Team</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Project Title"
                  className={`w-full ${cardBg} border ${borderColor} rounded-xl px-4 py-3 ${textPrimary} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                <textarea
                  placeholder="Project Description"
                  rows={3}
                  className={`w-full ${cardBg} border ${borderColor} rounded-xl px-4 py-3 ${textPrimary} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                <input
                  type="text"
                  placeholder="Required Skills (comma separated)"
                  className={`w-full ${cardBg} border ${borderColor} rounded-xl px-4 py-3 ${textPrimary} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all">
                  Find Teammates with AI
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
