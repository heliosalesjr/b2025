"use client";
import { useState } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';

const navigation = {
  'Apresentação': [
    { id: 'apresentacao-1', title: 'Apresentação do Curso' },
    { id: 'apresentacao-2', title: 'Autonomia' },
    { id: 'apresentacao-3', title: 'Estrutura do Curso' },
    { id: 'apresentacao-4', title: 'Módulos' },
  ],
};

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isViewed } = useSidebar();

  const scrollToComponent = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Overlay com fade quando sidebar está aberta */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full bg-white shadow-lg z-50 transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        {/* Conteúdo da sidebar */}
        <div className="w-64 p-4 pt-16 h-full overflow-y-auto mt-32">
          <h3 className="font-bold text-lg mb-4">Navegação</h3>
          
          {Object.entries(navigation).map(([page, components]) => (
            <div key={page} className="mb-4">
              <h4 className="font-semibold mb-2">{page}</h4>
              <div className="ml-4 space-y-1">
                {components.map((component) => (
                  <button
                    key={component.id}
                    onClick={() => {
                      scrollToComponent(component.id);
                      setIsOpen(false); // Fecha a sidebar após clicar
                    }}
                    className="flex items-center gap-2 text-sm hover:text-blue-600 py-1 w-full text-left transition-colors duration-200"
                  >
                    {isViewed(component.id) && (
                      <span className="text-green-600">✓</span>
                    )}
                    {component.title}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Botão para abrir/fechar - centralizado verticalmente */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed left-0 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-r-lg shadow-lg z-50 transition-all duration-200 hover:scale-105"
      >
        {isOpen ? '←' : '→'}
      </button>
    </>
  );
}