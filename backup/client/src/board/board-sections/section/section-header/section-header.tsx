import React, { useState } from 'react';
import { SectionRename } from '../../section-rename';
import { FetchSections_fetchSections_sections } from '../../__generated__/FetchSections';
import { SectionMenu } from '../section-menu';
import { SectionHeaderTitle } from './section-header-title.styled';
import { SectionHeaderWrapper } from './section-header-wrapper.styled';

interface SectionHeaderProps {
  section: FetchSections_fetchSections_sections;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ section }) => {
  const [showForm, setShowForm] = useState(false);
  const handleShow = () => setShowForm(true);
  const handleHide = () => setShowForm(false);
  return (
    <SectionHeaderWrapper>
      {showForm ? (
        <SectionRename handleHide={handleHide} section={section} />
      ) : (
        <SectionHeaderTitle onClick={handleShow}>{section.title}</SectionHeaderTitle>
      )}

      <SectionMenu sectionId={section.id} />
    </SectionHeaderWrapper>
  );
};
