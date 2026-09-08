import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

import AireProject from './projects/AireProject';
import PalworldProject from './projects/PalworldProject';
import SocketProject from './projects/SocketProject';
import MaterialProject from './projects/MaterialProject';

export default function ProjectDetail() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const { id } = useParams<{ id: string }>();
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const renderProjectContent = () => {
    switch(id) {
      case 'aire':
        return <AireProject setSelectedImg={setSelectedImg} />;
      case 'palworld':
        return <PalworldProject setSelectedImg={setSelectedImg} />;
      case 'socket':
        return <SocketProject />;
      case 'material':
        return <MaterialProject setSelectedImg={setSelectedImg} />;
      default:
        return <div className="py-40 text-center text-game-muted">Project not found</div>;
    }
  };

  return (
    <div className="pt-24 pb-20 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <Link 
          to="/" 
          className="inline-flex items-center text-game-muted hover:text-game-accent mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          {t("돌아가기", "Back to Projects")}
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {renderProjectContent()}
        </motion.div>
      </div>

      {/* Image Modal */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedImg(null)}
        >
          <img 
            src={selectedImg} 
            alt="Expanded view" 
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </div>
  );
}
