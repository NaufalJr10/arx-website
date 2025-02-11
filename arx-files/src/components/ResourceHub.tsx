import React from 'react';
import { BookOpen, Phone, Shield, Heart } from 'lucide-react';

export default function ResourceHub() {
  const resources = [
    {
      category: 'Safety Guides',
      items: [
        { title: 'Personal Safety Planning', link: '#' },
        { title: 'Home Security Checklist', link: '#' },
        { title: 'Digital Safety Guide', link: '#' }
      ],
      icon: Shield
    },
    {
      category: 'Mental Health',
      items: [
        { title: 'Coping Strategies', link: '#' },
        { title: 'Anxiety Management', link: '#' },
        { title: 'Trauma Recovery', link: '#' }
      ],
      icon: Heart
    },
    {
      category: 'Emergency Contacts',
      items: [
        { title: 'National Crisis Hotline', link: '#' },
        { title: 'Local Support Services', link: '#' },
        { title: 'Legal Aid Resources', link: '#' }
      ],
      icon: Phone
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50" id="resources">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <BookOpen className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Resource Hub</h2>
          <p className="text-lg text-gray-600">Access essential resources and support services</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((category) => {
            const Icon = category.icon;
            return (
              <div key={category.category} className="bg-white rounded-lg shadow-md p-6">
                <Icon className="h-8 w-8 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
                <ul className="space-y-3">
                  {category.items.map((item) => (
                    <li key={item.title}>
                      <a
                        href={item.link}
                        className="text-gray-600 hover:text-indigo-600 flex items-center gap-2"
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}