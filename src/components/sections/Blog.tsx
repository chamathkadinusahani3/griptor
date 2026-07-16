import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { ArrowRight } from 'lucide-react';
const POSTS = [
{
  title: 'How Cloud Software is Revolutionizing Independent Garages',
  category: 'Industry Insights',
  date: 'Oct 12, 2023',
  author: 'James Wilson',
  image:
  'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=800'
},
{
  title: '5 Inventory Management Mistakes Costing Your Dealership Money',
  category: 'Best Practices',
  date: 'Oct 05, 2023',
  author: 'Sarah Jenkins',
  image:
  'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=800'
},
{
  title: 'The Future of Fleet Management: AI and Predictive Maintenance',
  category: 'Technology',
  date: 'Sep 28, 2023',
  author: 'David Chen',
  image:
  'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=800'
}];

export const Blog = () => {
  return (
    <section className="py-24 bg-[var(--soft-gray)]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          badge="Resources"
          title="Latest from the Blog"
          subtitle="Insights, updates, and best practices for automotive businesses." />
        

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {POSTS.map((post, i) =>
          <Reveal key={i} delay={i * 0.1}>
              <div className="bg-white rounded-3xl border border-[var(--border)] overflow-hidden group cursor-pointer hover:shadow-xl hover:shadow-[var(--teal)]/10 transition-all duration-300 h-full flex flex-col">
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                  <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                
                  <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-[var(--navy)]">
                    {post.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[var(--text-gray)] mb-3">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.author}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[var(--navy)] mb-4 group-hover:text-[var(--teal)] transition-colors">
                    {post.title}
                  </h3>
                  <div className="mt-auto flex items-center gap-2 text-sm font-bold text-[var(--teal)]">
                    Read Article{' '}
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

};