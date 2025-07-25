"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSidebar } from '@/contexts/SidebarContext';

const navigation = {
  'Apresentação': {
    path: '/',
    components: [
      { id: 'apresentacao-1', title: 'Apresentação do Curso' },
      { id: 'apresentacao-2', title: 'Autonomia' },
      { id: 'apresentacao-3', title: 'Estrutura do Curso' },
      { id: 'apresentacao-4', title: 'Módulos' },
    ]
  },
  'Módulo 1': {
    path: '/modulo1',
    components: [
      { id: 'modulo-1-intro', title: 'O Módulo 1' },
      { id: 'modulo-1-objetivos', title: 'Objetivos do Módulo' },
      { id: 'modulo-1-situacao', title: 'Situação e Importância' },
        { id: 'modulo-1-midia', title: 'Educação Financeira na Mídia' },
        { id: 'modulo-1-video', title: 'A situação financeira dos Brasileiros' },
    ]
  },
  'Educação Financeira': {
    path: '/educacaofinanceira',
    components: [
      { id: 'ef-intro', title: 'Introdução' },
      { id: 'ef-2', title: 'Educação Financeira no Ensino Fundamental' },
      { id: 'ef-3', title: 'Matemática Financeira vs Educação Financeira' },
      { id: 'ef-4', title: 'O programa da BEĨ Educação' },
      { id: 'ef-5', title: 'Mais sobre o programa' },
       
    ]
  },
  'Metodologias': {
    path: '/metodologias',
    components: [
      { id: 'met-1', title: 'Metodologias Ativas' },
      { id: 'met-2', title: 'Aprendizagem Baseada em Projetos' },
      { id: 'met-3', title: 'ABP - Resumo' },
      { id: 'met-4', title: 'Pequenos Projetos Didáticos Ativos' },
      { id: 'met-5', title: 'Fator de Mobilização' },
      { id: 'met-6', title: 'Mais sobre mobilização' },
    ]
  },
  'Material Didático': {
    path: '/material',
    components: [
      { id: 'mat-1', title: 'Estrutura do Livro do Estudante' },
      { id: 'mat-2', title: 'Estrutura do Caderno do Educador' },
      { id: 'mat-3', title: 'Primeiros registros' },
      { id: 'mat-5', title: 'Diário de Bordo' },
      { id: 'mat-6', title: 'Padlet' },
      { id: 'mat-7', title: 'Saiba Mais - Links' },
    ]
  },
  'Diagnóstico': {
    path: '/diagnostico',
    components: [
      // Adicione os componentes aqui quando criar
    ]
  },
};

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isViewed } = useSidebar();
  const router = useRouter();

  const scrollToComponent = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigation = (path, componentId = null) => {
    if (componentId) {
      // Se estamos na mesma página, só faz scroll
      if (window.location.pathname === path) {
        scrollToComponent(componentId);
      } else {
        // Se estamos em página diferente, navega e depois faz scroll
        router.push(`${path}#${componentId}`);
      }
    } else {
      // Navega para a página
      router.push(path);
    }
    setIsOpen(false);
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
          
          {Object.entries(navigation).map(([pageName, pageData]) => (
            <div key={pageName} className="mb-4">
              {/* Título da página - clicável */}
              <button
                onClick={() => handleNavigation(pageData.path)}
                className="font-semibold mb-2 hover:text-blue-600 transition-colors duration-200 w-full text-left"
              >
                {pageName}
              </button>
              
              {/* Componentes da página */}
              {pageData.components.length > 0 && (
                <div className="ml-4 space-y-1">
                  {pageData.components.map((component) => (
                    <button
                      key={component.id}
                      onClick={() => handleNavigation(pageData.path, component.id)}
                      className="flex items-center gap-2 text-sm hover:text-blue-600 py-1 w-full text-left transition-colors duration-200"
                    >
                      {isViewed(component.id) && (
                        <span className="text-green-600">✓</span>
                      )}
                      {component.title}
                    </button>
                  ))}
                </div>
              )}
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