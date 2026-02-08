/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState, useEffect } from 'react';
import { Award, Trophy, Star, Zap, Gift, ChevronRight, Users, Target, TrendingUp } from 'lucide-react';

const Page = () => {
  const [points, setPoints] = useState(2450);
  const [level, setLevel] = useState(3);
  const [animatePoints, setAnimatePoints] = useState(false);

  useEffect(() => {
    setAnimatePoints(true);
    const timer = setTimeout(() => setAnimatePoints(false), 600);
    return () => clearTimeout(timer);
  }, []);

  const rewards = [
    { 
      id: 1, 
      name: 'Community Contributor Badge', 
      points: 500, 
      icon: '🏅', 
      color: 'bg-amber-500',
      description: 'Active participation recognition'
    },
    { 
      id: 2, 
      name: 'Content Creator Reward', 
      points: 1000, 
      icon: '📝', 
      color: 'bg-purple-500',
      description: 'Quality content contribution'
    },
    { 
      id: 3, 
      name: 'Community Ambassador', 
      points: 2000, 
      icon: '🎖️', 
      color: 'bg-pink-500',
      description: 'Leadership & guidance'
    },
    { 
      id: 4, 
      name: 'Strategic Contributor', 
      points: 3500, 
      icon: '💎', 
      color: 'bg-blue-500',
      description: 'Strategic input & planning'
    },
    { 
      id: 5, 
      name: 'Ecosystem Builder', 
      points: 5000, 
      icon: '🏗️', 
      color: 'bg-green-500',
      description: 'Major ecosystem development'
    },
    { 
      id: 6, 
      name: 'Colony Leader', 
      points: 10000, 
      icon: '👑', 
      color: 'bg-red-500',
      description: 'Exceptional long-term contribution'
    },
  ];

  const activities = [
    { id: 1, name: 'Community Discussion', points: '+50', time: '2 hours ago', type: 'participation' },
    { id: 2, name: 'Educational Content', points: '+200', time: '1 day ago', type: 'contribution' },
    { id: 3, name: 'New Member Onboarding', points: '+150', time: '2 days ago', type: 'community' },
    { id: 4, name: 'Strategic Feedback', points: '+300', time: '3 days ago', type: 'governance' },
  ];

  const nextLevel = (level + 1) * 1000;
  const progress = (points % 1000) / 10;

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="text-6xl">🐜</span>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-amber-600 to-red-600 bg-clip-text text-transparent">
              ANTS Rewards
            </h1>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Community-driven ecosystem built on fairness, transparency and long-term cooperation
          </p>
          <p className="text-sm text-amber-600 mt-2 font-medium">
            "One ANT is weak. Together, we are unstoppable."
          </p>
        </div>

        {/* Key Principles Banner */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-4 shadow-md border-l-4 border-amber-500">
            <Users className="w-6 h-6 text-amber-600 mb-2" />
            <h4 className="font-bold text-gray-800 text-sm">Unity Over Gain</h4>
            <p className="text-xs text-gray-600 mt-1">Collective progress first</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-md border-l-4 border-blue-500">
            <Target className="w-6 h-6 text-blue-600 mb-2" />
            <h4 className="font-bold text-gray-800 text-sm">Transparency</h4>
            <p className="text-xs text-gray-600 mt-1">Clear & visible decisions</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-md border-l-4 border-green-500">
            <TrendingUp className="w-6 h-6 text-green-600 mb-2" />
            <h4 className="font-bold text-gray-800 text-sm">Long-Term Focus</h4>
            <p className="text-xs text-gray-600 mt-1">Built for longevity</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-md border-l-4 border-purple-500">
            <Award className="w-6 h-6 text-purple-600 mb-2" />
            <h4 className="font-bold text-gray-800 text-sm">Contribution</h4>
            <p className="text-xs text-gray-600 mt-1">Quality over volume</p>
          </div>
        </div>

        {/* Points Card */}
        <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 rounded-3xl p-8 text-white mb-8 shadow-2xl">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-orange-100 text-sm mb-1">Your ANTS Points</p>
              <h2 className={`text-5xl font-bold ${animatePoints ? 'scale-110' : 'scale-100'} transition-transform duration-300`}>
                {points.toLocaleString()}
              </h2>
              <p className="text-orange-100 text-sm mt-2">
                Contribution-based rewards • Human-guided evaluation
              </p>
            </div>
            <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm">
              <Trophy className="w-12 h-12" />
            </div>
          </div>

          {/* Level Progress */}
          <div className="bg-white/10 rounded-2xl p-5 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-3">
              <div>
                <span className="text-sm font-medium">Colony Level {level}</span>
                <p className="text-xs text-orange-100 mt-1">Contribution Tier</p>
              </div>
              <span className="text-sm text-orange-100">
                {points % 1000}/{nextLevel - (level * 1000)} to Level {level + 1}
              </span>
            </div>
            <div className="bg-white/20 rounded-full h-4 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-yellow-400 to-orange-300 h-full rounded-full transition-all duration-500 shadow-lg"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Important Notice */}
          <div className="mt-4 bg-orange-700/30 border border-orange-400/30 rounded-xl p-4 backdrop-blur-sm">
            <p className="text-xs text-orange-100 leading-relaxed">
              ⚠️ <strong>Important:</strong> ANTS rewards are not automated, guaranteed, or volume-based. 
              This is not a staking protocol or income mechanism. Rewards recognize meaningful, 
              quality contributions aligned with community values.
            </p>
          </div>
        </div>

       

        
      </div>
    </div>
  );
};

export default Page;