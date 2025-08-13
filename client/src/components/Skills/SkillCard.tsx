import React, { useEffect, useState } from 'react'
import axios from 'axios'


type Skill = {
  _id: string;
  title: string;
  description: string;
  svgData: string;
};

const SkillCard = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get('http://localhost:5000/data/getskill')
      .then((res) => {
        setSkills(res.data || []);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to load skills');
        setLoading(false);
      });
  }, []);

  return (
    
      <section className="py-20 px-4 bg-white min-h-screen ">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">My Skills & Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive overview of my technical skills and areas of expertise, developed through hands-on
              experience and continuous learning.
            </p>
          </div>

          {loading ? (
            <div className="text-center text-lg text-gray-500">Loading...</div>
          ) : error ? (
            <div className="text-center text-red-500">{error}</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {skills?.map((skill) => (
                <div
                  key={skill._id}
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200 hover:-translate-y-2"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 mb-4 p-3 bg-purple-50 rounded-xl group-hover:bg-purple-100 transition-colors duration-300">
                      <img src={`data:image/svg+xml;base64,${skill.svgData}`} alt="web" />
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-3 font-sans">{skill.title}</h3>

                    <p className="text-gray-600 text-sm leading-relaxed">{skill.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

  );
}

export default SkillCard