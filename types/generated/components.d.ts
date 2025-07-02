import type { Schema, Struct } from '@strapi/strapi';

export interface AboutAward extends Struct.ComponentSchema {
  collectionName: 'components_about_awards';
  info: {
    displayName: 'Award';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    subtitle: Schema.Attribute.String;
    text: Schema.Attribute.RichText;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AboutAwardsBlock extends Struct.ComponentSchema {
  collectionName: 'components_about_awards_blocks';
  info: {
    displayName: 'AwardsBlock';
  };
  attributes: {
    items: Schema.Attribute.Component<'about.award', true>;
    title: Schema.Attribute.String;
  };
}

export interface AboutPrinciples extends Struct.ComponentSchema {
  collectionName: 'components_about_principles';
  info: {
    description: '';
    displayName: 'principles';
    icon: 'bulletList';
  };
  attributes: {
    items: Schema.Attribute.Component<'shared.text-block', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AboutQuality extends Struct.ComponentSchema {
  collectionName: 'components_about_qualities';
  info: {
    description: '';
    displayName: 'Quality';
    icon: 'check';
  };
  attributes: {
    cover: Schema.Attribute.Media<'images'>;
    images: Schema.Attribute.Media<'images', true>;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    text: Schema.Attribute.RichText & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContactsDivision extends Struct.ComponentSchema {
  collectionName: 'components_contacts_divisions';
  info: {
    description: '';
    displayName: 'division';
  };
  attributes: {
    employees: Schema.Attribute.Component<'contacts.employee', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContactsEmployee extends Struct.ComponentSchema {
  collectionName: 'components_contacts_employees';
  info: {
    description: '';
    displayName: 'employee';
  };
  attributes: {
    email: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    phone: Schema.Attribute.String & Schema.Attribute.Required;
    position: Schema.Attribute.String;
  };
}

export interface HomeAbout extends Struct.ComponentSchema {
  collectionName: 'components_home_abouts';
  info: {
    description: '';
    displayName: '\u0411\u043B\u043E\u043A: \u041E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438';
    icon: 'book';
  };
  attributes: {
    advantages: Schema.Attribute.Component<'shared.text-with-icon', true>;
    enabled: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    facts: Schema.Attribute.Component<'shared.text-with-icon', true>;
    title: Schema.Attribute.RichText & Schema.Attribute.Required;
  };
}

export interface HomeAdvontages extends Struct.ComponentSchema {
  collectionName: 'components_home_advontages';
  info: {
    description: '';
    displayName: '\u0411\u043B\u043E\u043A: \u041F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430';
    icon: 'bulletList';
  };
  attributes: {
    enabled: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    html: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    items: Schema.Attribute.Component<'shared.text-with-icon', true>;
  };
}

export interface HomeBenefits extends Struct.ComponentSchema {
  collectionName: 'components_home_benefits';
  info: {
    description: '';
    displayName: '\u0411\u043B\u043E\u043A: \u041F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430';
  };
  attributes: {
    description: Schema.Attribute.String;
    enabled: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    items: Schema.Attribute.Component<'shared.benefit', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeClients extends Struct.ComponentSchema {
  collectionName: 'components_home_clients';
  info: {
    description: '';
    displayName: '\u0411\u043B\u043E\u043A: \u041A\u043B\u0438\u0435\u043D\u0442\u044B';
    icon: 'alien';
  };
  attributes: {
    enabled: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    firstRow: Schema.Attribute.Component<'shared.client', true>;
    secondRow: Schema.Attribute.Component<'shared.client', true>;
    thirdRow: Schema.Attribute.Component<'shared.client', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeEquipmentCount extends Struct.ComponentSchema {
  collectionName: 'components_home_equipment_counts';
  info: {
    description: '';
    displayName: '\u0411\u043B\u043E\u043A: \u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F \u0432 \u0446\u0438\u0444\u0440\u0430\u0445';
  };
  attributes: {
    bigItems: Schema.Attribute.Component<'stats.equipment-count', true>;
    enabled: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    smallItems: Schema.Attribute.Component<'stats.equipment-count', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeHero extends Struct.ComponentSchema {
  collectionName: 'components_home_heroes';
  info: {
    description: '';
    displayName: '\u0411\u043B\u043E\u043A: \u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0439';
    icon: 'landscape';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeMaterials extends Struct.ComponentSchema {
  collectionName: 'components_home_materials';
  info: {
    description: '';
    displayName: '\u0411\u043B\u043E\u043A: \u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B';
  };
  attributes: {
    description: Schema.Attribute.String;
    enabled: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    items: Schema.Attribute.Component<'shared.text', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeSalesGeography extends Struct.ComponentSchema {
  collectionName: 'components_home_sales_geographies';
  info: {
    description: '';
    displayName: '\u0411\u043B\u043E\u043A: \u0413\u0435\u043E\u0433\u0440\u0430\u0444\u0438\u044F \u043F\u043E\u0441\u0442\u0430\u0432\u043E\u043A';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text;
    enabled: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    items: Schema.Attribute.Component<'shared.coordinates', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface MachineTabs extends Struct.ComponentSchema {
  collectionName: 'components_machine_tabs';
  info: {
    description: '';
    displayName: 'Tabs';
    icon: 'apps';
  };
  attributes: {
    sections: Schema.Attribute.Component<'machine.tabs-section', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface MachineTabsSection extends Struct.ComponentSchema {
  collectionName: 'components_machine_tabs_sections';
  info: {
    description: '';
    displayName: 'TabsSection';
    icon: 'bulletList';
  };
  attributes: {
    items: Schema.Attribute.Component<'machine.tabs-section-item', true>;
    text: Schema.Attribute.RichText;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface MachineTabsSectionItem extends Struct.ComponentSchema {
  collectionName: 'components_machine_tabs_section_items';
  info: {
    displayName: 'TabsSectionItem';
    icon: 'bulletList';
  };
  attributes: {
    gallery: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    note: Schema.Attribute.String;
    text: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface MaterialTabs extends Struct.ComponentSchema {
  collectionName: 'components_material_tabs';
  info: {
    description: '';
    displayName: 'Tabs';
    icon: 'apps';
  };
  attributes: {
    items: Schema.Attribute.Component<'material.tabs-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface MaterialTabsItem extends Struct.ComponentSchema {
  collectionName: 'components_material_tabs_items';
  info: {
    description: '';
    displayName: 'TabsItem';
  };
  attributes: {
    items: Schema.Attribute.Component<'material.tabs-item-children', false>;
    title: Schema.Attribute.String;
  };
}

export interface MaterialTabsItemChildren extends Struct.ComponentSchema {
  collectionName: 'components_material_tabs_item_children';
  info: {
    displayName: 'TabsItemChildren';
  };
  attributes: {
    caption: Schema.Attribute.RichText;
    gallery: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    html: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedBenefit extends Struct.ComponentSchema {
  collectionName: 'components_shared_benefits';
  info: {
    displayName: 'Benefit';
  };
  attributes: {
    html: Schema.Attribute.RichText;
    size: Schema.Attribute.Enumeration<['small', 'large']> &
      Schema.Attribute.DefaultTo<'small'>;
  };
}

export interface SharedClient extends Struct.ComponentSchema {
  collectionName: 'components_shared_clients';
  info: {
    description: '';
    displayName: 'Client';
    icon: 'alien';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedCoordinates extends Struct.ComponentSchema {
  collectionName: 'components_shared_coordinates';
  info: {
    description: '';
    displayName: 'Coordinates';
  };
  attributes: {
    latitude: Schema.Attribute.Float;
    longitude: Schema.Attribute.Float;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedGallery extends Struct.ComponentSchema {
  collectionName: 'components_shared_galleries';
  info: {
    description: '';
    displayName: 'Gallery';
    icon: 'landscape';
  };
  attributes: {
    images: Schema.Attribute.Media<'images', true>;
    subtitle: Schema.Attribute.String;
    text: Schema.Attribute.RichText;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedHtml extends Struct.ComponentSchema {
  collectionName: 'components_shared_htmls';
  info: {
    displayName: 'html';
    icon: 'bold';
  };
  attributes: {
    html: Schema.Attribute.RichText;
  };
}

export interface SharedListBlock extends Struct.ComponentSchema {
  collectionName: 'components_shared_list_blocks';
  info: {
    displayName: 'ListBlock';
    icon: 'bulletList';
  };
  attributes: {
    items: Schema.Attribute.Component<'shared.text-block', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedNumberedItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_numbered_items';
  info: {
    description: '';
    displayName: 'NumberedItem';
  };
  attributes: {
    advantages: Schema.Attribute.Component<'shared.text', true>;
    caption: Schema.Attribute.String;
    html: Schema.Attribute.RichText;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    width: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
        },
        number
      > &
      Schema.Attribute.DefaultTo<3>;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'SEO';
    icon: 'bulletList';
  };
  attributes: {
    canonicalUrl: Schema.Attribute.String;
    metaDescription: Schema.Attribute.Text;
    metaImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    metaKeywords: Schema.Attribute.String;
    metaRobots: Schema.Attribute.Enumeration<
      [
        'index, follow',
        'noindex, follow',
        'index, nofollow',
        'noindex, nofollow',
      ]
    > &
      Schema.Attribute.DefaultTo<'index, follow'>;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedText extends Struct.ComponentSchema {
  collectionName: 'components_shared_texts';
  info: {
    description: '';
    displayName: 'Text';
    icon: 'bulletList';
  };
  attributes: {
    text: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface SharedTextBlock extends Struct.ComponentSchema {
  collectionName: 'components_shared_text_blocks';
  info: {
    description: '';
    displayName: 'TextBlock';
    icon: 'pencil';
  };
  attributes: {
    text: Schema.Attribute.RichText;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedTextWithIcon extends Struct.ComponentSchema {
  collectionName: 'components_shared_text_with_icons';
  info: {
    description: '';
    displayName: 'TextWithIcon';
    icon: 'landscape';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'>;
    text: Schema.Attribute.RichText & Schema.Attribute.Required;
  };
}

export interface SharedTimeline extends Struct.ComponentSchema {
  collectionName: 'components_shared_timelines';
  info: {
    description: '';
    displayName: 'Timeline';
    icon: 'apps';
  };
  attributes: {
    text: Schema.Attribute.RichText;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    year: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface StageStageItem extends Struct.ComponentSchema {
  collectionName: 'components_stage_stage_items';
  info: {
    description: '';
    displayName: 'StageItem';
  };
  attributes: {
    description: Schema.Attribute.Text;
    html: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface StatsEquipmentCount extends Struct.ComponentSchema {
  collectionName: 'components_stats_equipment_count_s';
  info: {
    description: '';
    displayName: 'EquipmentCount ';
    icon: 'stack';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'#EAEBF2'>;
    html: Schema.Attribute.RichText;
    paddingBottom: Schema.Attribute.Integer;
    textColor: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'#11458D'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.Integer;
    weight: Schema.Attribute.Integer;
  };
}

export interface TechnologyTab extends Struct.ComponentSchema {
  collectionName: 'components_technology_tabs';
  info: {
    description: '';
    displayName: 'Tab';
  };
  attributes: {
    html: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    list: Schema.Attribute.Component<'shared.numbered-item', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface TypesAdvantages extends Struct.ComponentSchema {
  collectionName: 'components_types_advantages';
  info: {
    description: '';
    displayName: 'Advantages';
    icon: 'bulletList';
  };
  attributes: {
    advantages: Schema.Attribute.Component<'shared.text-with-icon', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface TypesTypeItem extends Struct.ComponentSchema {
  collectionName: 'components_types_type_items';
  info: {
    description: '';
    displayName: 'TypeItem';
    icon: 'database';
  };
  attributes: {
    caption: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    text: Schema.Attribute.RichText;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface TypesTypeWithGallery extends Struct.ComponentSchema {
  collectionName: 'components_types_type_with_galleries';
  info: {
    description: '';
    displayName: '\u0412\u0438\u0434 \u0433\u0438\u0431\u043A\u043E\u0439 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0438 \u0441 \u0433\u0430\u043B\u0435\u0440\u0435\u0435\u0439';
    icon: 'landscape';
  };
  attributes: {
    caption: Schema.Attribute.Text;
    html: Schema.Attribute.RichText;
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface TypesTypeWithIcons extends Struct.ComponentSchema {
  collectionName: 'components_types_type_with_icons';
  info: {
    description: '';
    displayName: '\u0412\u0438\u0434 \u0433\u0438\u0431\u043A\u043E\u0439 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0438 \u0441 \u0438\u043A\u043E\u043D\u043A\u0430\u043C\u0438';
    icon: 'grid';
  };
  attributes: {
    caption: Schema.Attribute.Text;
    html: Schema.Attribute.RichText;
    icons: Schema.Attribute.Component<'shared.text-with-icon', true>;
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface TypesTypeWithManyItems extends Struct.ComponentSchema {
  collectionName: 'components_types_type_with_many_items';
  info: {
    description: '';
    displayName: '\u0412\u0438\u0434 \u0433\u0438\u0431\u043A\u043E\u0439 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0438 \u0441 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u0438\u043C\u0438 \u0441\u0435\u043A\u0446\u0438\u044F\u043C\u0438';
    icon: 'bulletList';
  };
  attributes: {
    items: Schema.Attribute.Component<'types.type-item', true>;
    text: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface VacancyVacancy extends Struct.ComponentSchema {
  collectionName: 'components_vacancy_vacancies';
  info: {
    description: '';
    displayName: 'Vacancy';
  };
  attributes: {
    city: Schema.Attribute.String & Schema.Attribute.Required;
    experience: Schema.Attribute.String;
    html: Schema.Attribute.RichText;
    link: Schema.Attribute.String;
    salary: Schema.Attribute.String;
    summary: Schema.Attribute.RichText;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface WidgetsClientsRow extends Struct.ComponentSchema {
  collectionName: 'components_widgets_clients_rows';
  info: {
    displayName: 'ClientsRow';
    icon: 'bulletList';
  };
  attributes: {
    items: Schema.Attribute.Component<'shared.client', true>;
  };
}

export interface WidgetsTimeline extends Struct.ComponentSchema {
  collectionName: 'components_widgets_timelines';
  info: {
    description: '';
    displayName: 'Timeline';
    icon: 'rocket';
  };
  attributes: {
    items: Schema.Attribute.Component<'shared.timeline', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about.award': AboutAward;
      'about.awards-block': AboutAwardsBlock;
      'about.principles': AboutPrinciples;
      'about.quality': AboutQuality;
      'contacts.division': ContactsDivision;
      'contacts.employee': ContactsEmployee;
      'home.about': HomeAbout;
      'home.advontages': HomeAdvontages;
      'home.benefits': HomeBenefits;
      'home.clients': HomeClients;
      'home.equipment-count': HomeEquipmentCount;
      'home.hero': HomeHero;
      'home.materials': HomeMaterials;
      'home.sales-geography': HomeSalesGeography;
      'machine.tabs': MachineTabs;
      'machine.tabs-section': MachineTabsSection;
      'machine.tabs-section-item': MachineTabsSectionItem;
      'material.tabs': MaterialTabs;
      'material.tabs-item': MaterialTabsItem;
      'material.tabs-item-children': MaterialTabsItemChildren;
      'shared.benefit': SharedBenefit;
      'shared.client': SharedClient;
      'shared.coordinates': SharedCoordinates;
      'shared.gallery': SharedGallery;
      'shared.html': SharedHtml;
      'shared.list-block': SharedListBlock;
      'shared.numbered-item': SharedNumberedItem;
      'shared.seo': SharedSeo;
      'shared.text': SharedText;
      'shared.text-block': SharedTextBlock;
      'shared.text-with-icon': SharedTextWithIcon;
      'shared.timeline': SharedTimeline;
      'stage.stage-item': StageStageItem;
      'stats.equipment-count': StatsEquipmentCount;
      'technology.tab': TechnologyTab;
      'types.advantages': TypesAdvantages;
      'types.type-item': TypesTypeItem;
      'types.type-with-gallery': TypesTypeWithGallery;
      'types.type-with-icons': TypesTypeWithIcons;
      'types.type-with-many-items': TypesTypeWithManyItems;
      'vacancy.vacancy': VacancyVacancy;
      'widgets.clients-row': WidgetsClientsRow;
      'widgets.timeline': WidgetsTimeline;
    }
  }
}
