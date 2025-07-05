
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Circle, Play, Target, Zap, Settings, Users, TrendingUp, ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const slides = [
  {
    id: 1,
    type: 'title',
    content: {
      headline: 'Liberio', // This headline is replaced by the logo in TitleSlide, but still part of data
      tagline: 'Turn Technical Support Chaos into Business Priority',
      description: 'AI-powered technical support intelligence that transforms noise into actionable insights'
    }
  },
  {
    id: 2,
    type: 'problem',
    content: {
      headline: 'Technical Support is Drowning in Noise',
      subheadline: 'The Cost is Enormous',
      points: [
        'High-value customers wait too long for critical fixes',
        'Expensive R&D time is wasted on low-priority issues',
        'No clear way to connect a ticket to its true business impact'
      ],
      metrics: [
        { label: 'Customer Retention', value: '-5%', color: 'text-yellow-400' },
        { label: 'Developer Productivity', value: '-15%', color: 'text-yellow-400' }
      ]
    }
  },
  {
    id: 3,
    type: 'solution',
    content: {
      headline: 'Liberio Finds the Signal in the Noise',
      subheadline: 'We enable companies to prioritize and resolve customer issues with greater speed and efficiency',
      features: [
        'AI-powered ticket analysis',
        'Business impact prioritization',
        'Intelligent routing & assignment'
      ]
    }
  },
  {
    id: 4,
    type: 'engine',
    content: {
      headline: 'We Turn Multi-Source Data into Actionable Insight',
      subheadline: 'The Liberio Engine',
      inputs: [
        { name: 'Customer Complaints', icon: '💬', color: 'bg-blue-500' },
        { name: 'Business Context', icon: '💰', color: 'bg-green-500' },
        { name: 'System Logs', icon: '📊', color: 'bg-purple-500' },
        { name: 'Historical Data', icon: '📁', color: 'bg-orange-500' },
        { name: 'Product Codebase', icon: '⚡', color: 'bg-teal-500' }
      ],
      output: 'The Perfect Ticket'
    }
  },
  {
    id: 5,
    type: 'output',
    content: {
      headline: 'From Raw Data to Total Clarity',
      subheadline: 'The "Perfect Ticket"',
      ticket: {
        priority: 'CRITICAL - Fortune 500 Client',
        summary: 'Login fails due to token expiration mismatch',
        routing: 'Auth Dev Team',
        diagnosis: 'Root Cause: Misconfiguration in cache server after v2.3 deployment'
      }
    }
  },
  {
    id: 6,
    type: 'architecture',
    content: {
      headline: 'A Secure, Scalable, Enterprise-Ready Platform',
      components: [
        'Data Ingestion & Normalization',
        'Correlation Engine (LLM + Proprietary Algorithms)',
        'Prioritization & Routing Logic'
      ],
      security: 'Your data never leaves your environment (deployed in your VPC)'
    }
  },
  {
    id: 7,
    type: 'roi',
    content: {
      headline: 'Quantifiable ROI: Impact Across the Bridge',
      subheadline: 'Liberio AI targets the Tier 3 bottleneck, unlocking value and velocity for the entire support structure.',
      metrics: [
        { label: 'Overall MTTR Reduction', value: '25%', color: 'text-green-400' },
        { label: 'Reduction in R&D Diagnostic Time', value: '20%', color: 'text-green-400' },
        { label: 'Reduction in T3 to R&D Escalations', value: '15%', color: 'text-green-400' },
        { label: 'Reduction in T2 to T3 Escalations', value: '25%', color: 'text-green-400' }
      ]
    }
  },
  {
    id: 8,
    type: 'market',
    content: {
      headline: 'A Multi-Billion Dollar Market Opportunity',
      subheadline: 'We operate at the confluence of massive, high-growth markets, fueled by irreversible macro trends.',
      tam: '$7.2 Billion',
      markets: [
        { name: 'AIOps', value: '$27B' },
        { name: 'Process Automation', value: '$26B' },
        { name: 'AI in Testing', value: '$10B' }
      ],
      tailwinds: [
        { title: 'Rising IT Complexity', description: 'Makes manual investigation impossible.' },
        { title: 'The AI-Driven SDLC', description: 'Creates the "Agentic Velocity Gap" that necessitates our solution.' },
        { title: 'Shift to Proactive Ops', description: 'Frees up engineers for high-value work.' }
      ]
    }
  },
  {
    id: 9,
    type: 'bridge',
    content: {
      headline: 'CRM & Ticketing: Liberio is the Bridge',
      subheadline: 'Liberio AI connects CRM and ticketing, automating the flow of context, diagnostics, and resolution between systems—eliminating the bottleneck and unlocking value.',
      crm: ['Salesforce', 'HubSpot', 'Zendesk'],
      ticketing: ['Jira', 'Monday']
    }
  },
  {
    id: 10,
    type: 'traction',
    content: {
      headline: 'Our Beachhead: The Critical Tier 3 Technical Support Bottleneck',
      description: 'We are strategically launching where the pain is most acute and the value is highest',
      metrics: [
        { label: 'Design Partners', value: '3+', icon: '🤝' },
        { label: 'Enterprise Pilots', value: '5+', icon: '🚀' },
        { label: 'Status', value: 'Live MVP', icon: '✅' }
      ]
    }
  },
  {
    id: 11,
    type: 'team',
    content: {
      headline: 'Forged in Data, Enterprise Software & Customer Pain',
      team: [
        {
          name: 'Ori Reshef, CEO',
          background: [
            'A seasoned B2B leader with extensive experience in R&D management, full product lifecycle, and executive sales.',
            'Spearheaded initiatives for industry giants like NICE and SAP, and driven growth in startups including LivePerson, Clicktale, and Varada.'
          ]
        },
        {
          name: 'Tal Ben-Moshe, CTO',
          background: [
            'Brings over 20 years of deep tech leadership, co-founded Varada (acquired by Starburst).',
            'Served as Chief Software Architect at Dell EMC XtremIO, leading development of innovative data infrastructure solutions.'
          ]
        }
      ]
    }
  },
  {
    id: 12,
    type: 'vision',
    content: {
      headline: 'Vision: The Intelligent Prioritization Layer for All of Technical Support',
      stages: [
        { stage: 'Now', focus: 'Tier 3 Technical Support', icon: '🎯' },
        { stage: 'Next', focus: 'Virtual implantation engineer on site support', icon: '📈' },
        { stage: 'Future', focus: 'Embedded', icon: '🔮' }
      ]
    }
  },
  {
    id: 13,
    type: 'ask',
    content: {
      headline: 'Join Us in Building the Future of Customer Technical Support',
      description: 'We are seeking $2M to achieve our next critical milestones',
      columns: [
        {
          title: 'Use of Funds',
          items: ['Team Expansion', 'Product Development', 'Sales & Marketing'],
          icon: '💰'
        },
        {
          title: '18-Month Goals',
          items: ['20+ Enterprise Customers', '$1M+ ARR', 'Full Platform Suite'],
          icon: '📊'
        },
        {
          title: 'Contact Us',
          items: ['Email: info@liberio.ai'],
          icon: '📧'
        }
      ]
    }
  }
];

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const slide = slides[currentSlide];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-slate-800 text-gray-200 flex flex-col">
      {/* Header with Progress */}
      <div className="bg-gray-900/80 backdrop-blur-sm border-b border-gray-700 px-6 py-4">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="bg-white rounded p-0.5 shadow-md">
                <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/453c28d3d_Logofinal.png" alt="Liberio Logo" className="h-8" />
            </div>
            <h1 className="text-xl font-bold text-white">Liberio Presentation</h1>
          </div>
          
          <div className="flex items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-blue-500 w-6' : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
          
          <div className="text-sm text-gray-400">
            {currentSlide + 1} / {slides.length}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-6xl">
          <SlideRenderer slide={slide} />
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-gray-900/80 backdrop-blur-sm border-t border-gray-700 px-6 py-4">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <Button
            variant="outline"
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="flex items-center gap-2 text-white border-gray-600 hover:bg-gray-800 hover:text-white"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </Button>
          
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-300">
              {slide.content.headline}
            </span>
          </div>
          
          <Button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

function SlideRenderer({ slide }) {
  const { type, content } = slide;

  switch (type) {
    case 'title':
      return <TitleSlide content={content} />;
    case 'problem':
      return <ProblemSlide content={content} />;
    case 'solution':
      return <SolutionSlide content={content} />;
    case 'engine':
      return <EngineSlide content={content} />;
    case 'output':
      return <OutputSlide content={content} />;
    case 'architecture':
      return <ArchitectureSlide content={content} />;
    case 'roi':
      return <ROISlide content={content} />;
    case 'market':
      return <MarketSlide content={content} />;
    case 'bridge':
      return <BridgeSlide content={content} />;
    case 'traction':
      return <TractionSlide content={content} />;
    case 'team':
      return <TeamSlide content={content} />;
    case 'vision':
      return <VisionSlide content={content} />;
    case 'ask':
      return <AskSlide content={content} />;
    default:
      return <div>Unknown slide type</div>;
  }
}

function TitleSlide({ content }) {
  return (
    <div className="text-center space-y-8 py-20">
      <div className="space-y-4">
        <div className="inline-block bg-white p-6 rounded-2xl shadow-2xl">
          <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/453c28d3d_Logofinal.png" alt="Liberio Logo" className="h-20" />
        </div>
        <p className="text-3xl text-gray-300 font-light !mt-12">
          {content.tagline}
        </p>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          {content.description}
        </p>
      </div>
      
      <div className="flex justify-center pt-8">
        <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
          <Zap className="w-12 h-12 text-white" />
        </div>
      </div>
    </div>
  );
}

function ProblemSlide({ content }) {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-5xl font-bold text-white">{content.headline}</h2>
        <p className="text-2xl text-yellow-400 font-medium">{content.subheadline}</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          {content.points.map((point, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="w-6 h-6 bg-yellow-500 rounded-full flex-shrink-0 mt-1">
                <span className="text-black text-sm font-bold flex items-center justify-center h-full">!</span>
              </div>
              <p className="text-lg text-gray-300">{point}</p>
            </div>
          ))}
        </div>
        
        <Card className="p-8 bg-gray-800/50 border border-yellow-500/30">
          <h3 className="text-2xl font-bold text-white mb-6">The Cost</h3>
          <div className="space-y-4">
            {content.metrics.map((metric, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-gray-300">{metric.label}</span>
                <span className={`text-2xl font-bold ${metric.color}`}>{metric.value}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

function SolutionSlide({ content }) {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-5xl font-bold text-white">{content.headline}</h2>
        <p className="text-2xl text-gray-300 max-w-4xl mx-auto">{content.subheadline}</p>
      </div>
      
      <div className="flex justify-center">
        <div className="relative">
          <div className="w-32 h-32 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
            <Target className="w-16 h-16 text-white" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full animate-pulse opacity-20 scale-125"></div>
        </div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {content.features.map((feature, index) => (
          <Card key={index} className="p-6 text-center bg-gray-800 border border-gray-700 hover:border-blue-500 hover:bg-gray-800/80 transition-all duration-300">
            <div className="w-12 h-12 bg-blue-900/50 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Circle className="w-6 h-6 text-blue-400" />
            </div>
            <p className="text-lg text-gray-300">{feature}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}

function EngineSlide({ content }) {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-5xl font-bold text-white">{content.headline}</h2>
        <p className="text-2xl text-gray-300">{content.subheadline}</p>
      </div>
      
      <div className="relative">
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mr-12">
            {content.inputs.map((input, index) => (
              <Card key={index} className="p-4 text-center bg-gray-800 border border-gray-700 hover:border-blue-500 hover:bg-gray-800/80 transition-all duration-300">
                <div className={`w-12 h-12 ${input.color} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                  <span className="text-2xl">{input.icon}</span>
                </div>
                <p className="text-sm font-medium text-gray-200">{input.name}</p>
              </Card>
            ))}
          </div>
          
          <div className="flex items-center">
            <ArrowRight className="w-8 h-8 text-gray-500 mx-8" />
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mb-4">
                <Settings className="w-12 h-12 text-white" />
              </div>
              <p className="text-lg font-bold text-white">Liberio AI</p>
              <p className="text-sm text-gray-300">Engine</p>
            </div>
            <ArrowRight className="w-8 h-8 text-gray-500 mx-8" />
          </div>
          
          <Card className="p-6 bg-gray-800 border border-green-500/50">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Play className="w-8 h-8 text-white" />
              </div>
              <p className="text-xl font-bold text-white">{content.output}</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

function OutputSlide({ content }) {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-5xl font-bold text-white">{content.headline}</h2>
        <p className="text-2xl text-gray-300">{content.subheadline}</p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <Card className="p-8 bg-gray-800/50 border-2 border-gray-700 shadow-xl">
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-gray-700 pb-4">
              <h3 className="text-2xl font-bold text-white">Technical Support Ticket #12847</h3>
              <Badge className="bg-yellow-400 text-black text-lg px-4 py-2">
                {content.ticket.priority}
              </Badge>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-400 mb-2">Summary</h4>
                <p className="text-lg text-gray-200">{content.ticket.summary}</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-400 mb-2">Assigned To</h4>
                <p className="text-lg text-blue-400 font-medium">{content.ticket.routing}</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-400 mb-2">AI Diagnosis</h4>
                <p className="text-lg text-yellow-200 bg-yellow-900/20 p-4 rounded-lg border-l-4 border-yellow-400">
                  {content.ticket.diagnosis}
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

function ArchitectureSlide({ content }) {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-5xl font-bold text-white">{content.headline}</h2>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {content.components.map((component, index) => (
          <Card key={index} className="p-6 text-center bg-gray-800 border border-gray-700 hover:border-blue-500 hover:bg-gray-800/80 transition-all duration-300">
            <div className="w-12 h-12 bg-blue-900/50 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Settings className="w-6 h-6 text-blue-400" />
            </div>
            <p className="text-lg text-gray-300">{component}</p>
          </Card>
        ))}
      </div>
      
      <Card className="p-8 bg-gray-800 border border-green-500/50 max-w-2xl mx-auto">
        <div className="text-center">
          <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">🔒</span>
          </div>
          <p className="text-xl font-bold text-white">{content.security}</p>
        </div>
      </Card>
    </div>
  );
}

function ROISlide({ content }) {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-5xl font-bold text-white">{content.headline}</h2>
        <p className="text-2xl text-gray-300 max-w-4xl mx-auto">{content.subheadline}</p>
      </div>
      
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-green-400 mb-4">Estimated ROI from Early Pilots:</h3>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {content.metrics.map((metric, index) => (
          <Card key={index} className="p-8 text-center bg-gray-800 border border-gray-700 hover:border-green-500 hover:bg-gray-800/80 transition-all duration-300">
            <div className="text-5xl font-bold text-green-400 mb-4">{metric.value}</div>
            <p className="text-xl text-gray-200">{metric.label}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}

function MarketSlide({ content }) {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-5xl font-bold text-white">{content.headline}</h2>
        <p className="text-2xl text-gray-300 max-w-4xl mx-auto">{content.subheadline}</p>
      </div>
      
      <div className="text-center mb-8">
        <div className="inline-block">
          <h3 className="text-xl text-gray-400 mb-2">Massive TAM</h3>
          <div className="text-6xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            {content.tam}
          </div>
          <p className="text-gray-400 mt-2">Total Addressable Market</p>
        </div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {content.markets.map((market, index) => (
          <Card key={index} className="p-6 text-center bg-gray-800 border border-gray-700 hover:border-blue-500 transition-all duration-300">
            <div className="text-3xl font-bold text-blue-400 mb-2">{market.value}</div>
            <p className="text-lg text-gray-200">{market.name}</p>
          </Card>
        ))}
      </div>
      
      <div className="space-y-6">
        <h3 className="text-3xl font-bold text-white text-center mb-8">Macro Tailwinds:</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {content.tailwinds.map((tailwind, index) => (
            <Card key={index} className="p-6 bg-gray-800 border border-gray-700 hover:border-purple-500 transition-all duration-300">
              <h4 className="text-xl font-bold text-purple-400 mb-3">{tailwind.title}</h4>
              <p className="text-gray-300">{tailwind.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

function BridgeSlide({ content }) {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-5xl font-bold text-white">{content.headline}</h2>
        <p className="text-2xl text-gray-300 max-w-4xl mx-auto">{content.subheadline}</p>
      </div>
      
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-5xl">
          {/* CRM Systems */}
          <Card className="p-8 bg-gray-800 border border-gray-700">
            <h3 className="text-2xl font-bold text-blue-400 mb-6 text-center">CRM Systems</h3>
            <div className="space-y-4">
              {content.crm.map((system, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg text-center">
                  <p className="text-gray-200 font-medium">{system}</p>
                </div>
              ))}
            </div>
          </Card>
          
          {/* Bridge */}
          <div className="text-center">
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-white font-bold text-lg">Liberio AI</div>
              </div>
              {/* These arrows are absolute positioned relative to their parent, which is the whole grid cell.
                  For a bridge visual, they'd ideally be absolutely positioned relative to the overall flex container 
                  or the grid itself to connect the columns. For simplicity, and as per outline, keeping them here.*/}
              <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 hidden md:block">
                <ArrowRight className="w-6 h-6 text-gray-500 rotate-180" />
              </div>
              <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 hidden md:block">
                <ArrowRight className="w-6 h-6 text-gray-500" />
              </div>
              {/* For mobile or smaller screens, where grid items stack, these horizontal arrows won't make sense.
                  If the design intended vertical arrows for stacking layout, that would need specific implementation.
                  As per current `ArrowRight` usage, implying horizontal flow. */}
            </div>
            <p className="text-lg text-gray-300 font-medium">The Bridge</p>
          </div>
          
          {/* Ticketing Systems */}
          <Card className="p-8 bg-gray-800 border border-gray-700">
            <h3 className="text-2xl font-bold text-green-400 mb-6 text-center">Ticketing Systems</h3>
            <div className="space-y-4">
              {content.ticketing.map((system, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg text-center">
                  <p className="text-gray-200 font-medium">{system}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

function TractionSlide({ content }) {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-5xl font-bold text-white">{content.headline}</h2>
        <p className="text-2xl text-gray-300 max-w-4xl mx-auto">{content.description}</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {content.metrics.map((metric, index) => (
          <Card key={index} className="p-8 text-center bg-gray-800 border border-gray-700 hover:border-blue-500 hover:bg-gray-800/80 transition-all duration-300">
            <div className="text-4xl mb-4">{metric.icon}</div>
            <p className="text-3xl font-bold text-white mb-2">{metric.value}</p>
            <p className="text-lg text-gray-300">{metric.label}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}

function TeamSlide({ content }) {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-5xl font-bold text-white">{content.headline}</h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {content.team.map((member, index) => (
          <Card key={index} className="p-8 text-center bg-gray-800 border border-gray-700 hover:border-blue-500 hover:bg-gray-800/80 transition-all duration-300 flex flex-col">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 flex-shrink-0">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">{member.name}</h3>
            <div className="space-y-3 text-left">
              {member.background.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-blue-400 mt-1.5 flex-shrink-0" />
                    <p className="text-gray-300">{item}</p>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

function VisionSlide({ content }) {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-5xl font-bold text-white">{content.headline}</h2>
      </div>
      
      <div className="flex items-center justify-center">
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl">
          {content.stages.map((stage, index) => (
            <div key={index} className="text-center">
              <Card className="p-6 bg-gray-800 border border-gray-700 hover:border-blue-500 hover:bg-gray-800/80 transition-all duration-300">
                <div className="text-4xl mb-4">{stage.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{stage.stage}</h3>
                <p className="text-lg text-gray-300">{stage.focus}</p>
              </Card>
              {/* This arrow positioning makes sense if the grid items are not wrapped, but as they are, it might not render as expected for an actual flow.
                  Keeping it as is from original, but noting it might be visually off depending on screen size. */}
              {index < content.stages.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-4 -translate-y-1/2">
                  <ArrowRight className="w-6 h-6 text-gray-500" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AskSlide({ content }) {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-5xl font-bold text-white">{content.headline}</h2>
        <p className="text-2xl text-gray-300">{content.description}</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {content.columns.map((column, index) => (
          <Card key={index} className="p-8 bg-gray-800 border border-gray-700 hover:border-blue-500 hover:bg-gray-800/80 transition-all duration-300">
            <div className="text-center mb-6">
              <div className="text-4xl mb-4">{column.icon}</div>
              <h3 className="text-2xl font-bold text-white">{column.title}</h3>
            </div>
            <div className="space-y-3">
              {column.items.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <Circle className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-300">{item}</p>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
      
      <div className="text-center pt-8">
        <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg">
          Let's Connect
        </Button>
      </div>
    </div>
  );
}
