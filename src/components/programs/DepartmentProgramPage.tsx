import { Link } from '@tanstack/react-router'
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  FileText,
  HeartPulse,
  Landmark,
  Network,
  ShieldCheck,
  Trophy,
  Users,
  type LucideIcon,
} from 'lucide-react'
import { useI18n, type AppLanguage } from '../../lib/i18n'

type DepartmentCopy = {
  eyebrow: string
  badge: string
  title: string
  localName: string
  description: string
  status: string
  purposeTitle: string
  purposeText: string
  workTitle: string
  workItems: string[]
  nextTitle: string
  nextText: string
  primaryCta: string
  secondaryCta: string
}

export type DepartmentProgram = {
  icon: LucideIcon
  accent: 'admin' | 'events' | 'finance' | 'sports' | 'media' | 'relations' | 'ambulance'
  copy: Record<AppLanguage, DepartmentCopy>
}

const accentClasses: Record<DepartmentProgram['accent'], string> = {
  admin: 'from-emerald-950 via-emerald-900 to-stone-950',
  events: 'from-rose-950 via-[#86163f] to-stone-950',
  finance: 'from-amber-950 via-[#9a6a12] to-stone-950',
  sports: 'from-green-950 via-emerald-800 to-stone-950',
  media: 'from-slate-950 via-slate-800 to-[#86163f]',
  relations: 'from-[#102719] via-emerald-900 to-[#86163f]',
  ambulance: 'from-red-950 via-rose-900 to-stone-950',
}

export const departmentProgramPages = {
  officeAdmin: {
    icon: ShieldCheck,
    accent: 'admin',
    copy: {
      en: {
        eyebrow: 'MBJP Department Gateway',
        badge: 'Office Admin Department',
        title: 'Office administration, records and member coordination',
        localName: 'شعبہ آفس ایڈمن',
        description:
          'This department page introduces MBJP office administration work. It is added as a public department gateway while the existing app modules remain unchanged.',
        status: 'Department page · workflow can be digitized in a future phase',
        purposeTitle: 'Department Purpose',
        purposeText:
          'Maintain office records, coordinate membership data, support documentation and organize internal administration for MBJP teams.',
        workTitle: 'Core work areas',
        workItems: ['Office records and files', 'Member coordination support', 'Document routing and follow-up', 'Internal administration notes'],
        nextTitle: 'Future digital workflow',
        nextText:
          'A future phase can add admin-only office tasks, document logs, dispatch records and follow-up tracking.',
        primaryCta: 'Apply for Membership',
        secondaryCta: 'Contact MBJP',
      },
      ur: {
        eyebrow: 'MBJP شعبہ گیٹ وے',
        badge: 'شعبہ آفس ایڈمن',
        title: 'آفس انتظامیہ، ریکارڈز اور ممبر کوآرڈینیشن',
        localName: 'Office Admin Department',
        description:
          'یہ صفحہ MBJP آفس ایڈمن کے کام کا تعارف ہے۔ موجودہ ایپ ماڈیولز اپنی جگہ برقرار ہیں، یہ نیا شعبہ پبلک گیٹ وے کے طور پر شامل کیا گیا ہے۔',
        status: 'شعبہ صفحہ · مستقبل میں ڈیجیٹل ورک فلو بنایا جا سکتا ہے',
        purposeTitle: 'شعبہ کا مقصد',
        purposeText:
          'آفس ریکارڈ برقرار رکھنا، ممبرشپ ڈیٹا کوآرڈینیٹ کرنا، دستاویزات میں مدد اور اندرونی انتظامی کام منظم کرنا۔',
        workTitle: 'بنیادی کام',
        workItems: ['آفس ریکارڈ اور فائلز', 'ممبر کوآرڈینیشن سپورٹ', 'دستاویزات فالو اَپ', 'اندرونی انتظامی نوٹس'],
        nextTitle: 'مستقبل کا ڈیجیٹل ورک فلو',
        nextText:
          'آئندہ مرحلے میں ایڈمن آفس ٹاسکس، ڈاکومنٹ لاگز، ڈسپیچ ریکارڈز اور فالو اَپ ٹریکنگ شامل کی جا سکتی ہے۔',
        primaryCta: 'ممبرشپ کے لیے اپلائی کریں',
        secondaryCta: 'MBJP سے رابطہ',
      },
      sd: {
        eyebrow: 'MBJP شعبو گيٽ وي',
        badge: 'شعبو آفيس ايڊمن',
        title: 'آفيس انتظاميه، رڪارڊ ۽ ميمبر ڪوآرڊينيشن',
        localName: 'Office Admin Department',
        description:
          'هي صفحو MBJP آفيس ايڊمن جي ڪم جو تعارف آهي. موجوده ايپ ماڊيولز برقرار آهن، هي نئون شعبو عوامي گيٽ وي طور شامل ٿيو آهي.',
        status: 'شعبو صفحو · مستقبل ۾ ڊجيٽل ورڪ فلو ٺاهي سگهجي ٿو',
        purposeTitle: 'شعبي جو مقصد',
        purposeText:
          'آفيس رڪارڊ برقرار رکڻ، ميمبرشپ ڊيٽا ڪوآرڊينيٽ ڪرڻ، دستاويزن ۾ مدد ۽ اندروني انتظامي ڪم منظم ڪرڻ.',
        workTitle: 'بنيادي ڪم',
        workItems: ['آفيس رڪارڊ ۽ فائلون', 'ميمبر ڪوآرڊينيشن سپورٽ', 'دستاويز فالو اَپ', 'اندروني انتظامي نوٽس'],
        nextTitle: 'مستقبل جو ڊجيٽل ورڪ فلو',
        nextText:
          'ايندڙ مرحلي ۾ ايڊمن آفيس ٽاسڪس، ڊاڪيومينٽ لاگز، ڊسپيچ رڪارڊ ۽ فالو اَپ ٽريڪنگ شامل ڪري سگهجن ٿا.',
        primaryCta: 'ميمبرشپ لاءِ اپلائي ڪريو',
        secondaryCta: 'MBJP سان رابطو',
      },
    },
  },
  eventManagement: {
    icon: CalendarDays,
    accent: 'events',
    copy: {
      en: {
        eyebrow: 'MBJP Department Gateway',
        badge: 'Event Management Department',
        title: 'Events, meetings and program coordination',
        localName: 'شعبہ پروگرام انتظامیہ',
        description:
          'Plan and coordinate MBJP events, meetings, public programs and field activities through a structured department gateway.',
        status: 'Department page · public information available',
        purposeTitle: 'Department Purpose',
        purposeText:
          'Coordinate schedules, venues, volunteers, announcements and attendance for MBJP programs and community activities.',
        workTitle: 'Core work areas',
        workItems: ['Meeting schedules', 'Event planning', 'Volunteer coordination', 'Program reporting'],
        nextTitle: 'Future digital workflow',
        nextText:
          'A future phase can add event requests, attendance lists, volunteer duty charts and event reports.',
        primaryCta: 'Apply for Membership',
        secondaryCta: 'View Events',
      },
      ur: {
        eyebrow: 'MBJP شعبہ گیٹ وے',
        badge: 'شعبہ پروگرام انتظامیہ',
        title: 'ایونٹس، میٹنگز اور پروگرام کوآرڈینیشن',
        localName: 'Event Management Department',
        description:
          'MBJP ایونٹس، میٹنگز، پبلک پروگرامز اور فیلڈ سرگرمیوں کو منظم شعبہ گیٹ وے کے ذریعے کوآرڈینیٹ کیا جائے گا۔',
        status: 'شعبہ صفحہ · پبلک معلومات دستیاب',
        purposeTitle: 'شعبہ کا مقصد',
        purposeText:
          'MBJP پروگرامز کے لیے شیڈولز، مقامات، رضاکار، اعلانات اور حاضری کوآرڈینیٹ کرنا۔',
        workTitle: 'بنیادی کام',
        workItems: ['میٹنگ شیڈولز', 'ایونٹ پلاننگ', 'رضاکار کوآرڈینیشن', 'پروگرام رپورٹنگ'],
        nextTitle: 'مستقبل کا ڈیجیٹل ورک فلو',
        nextText:
          'آئندہ مرحلے میں ایونٹ درخواستیں، حاضری لسٹ، رضاکار ڈیوٹی چارٹ اور ایونٹ رپورٹس شامل ہو سکتی ہیں۔',
        primaryCta: 'ممبرشپ کے لیے اپلائی کریں',
        secondaryCta: 'ایونٹس دیکھیں',
      },
      sd: {
        eyebrow: 'MBJP شعبو گيٽ وي',
        badge: 'شعبو پروگرام انتظاميه',
        title: 'ايونٽس، ميٽنگون ۽ پروگرام ڪوآرڊينيشن',
        localName: 'Event Management Department',
        description:
          'MBJP ايونٽس، ميٽنگون، عوامي پروگرام ۽ فيلڊ سرگرميون منظم شعبي گيٽ وي ذريعي ڪوآرڊينيٽ ڪيون وينديون.',
        status: 'شعبو صفحو · عوامي معلومات موجود',
        purposeTitle: 'شعبي جو مقصد',
        purposeText:
          'MBJP پروگرامن لاءِ شيڊول، جڳھون، رضاڪار، اعلان ۽ حاضري ڪوآرڊينيٽ ڪرڻ.',
        workTitle: 'بنيادي ڪم',
        workItems: ['ميٽنگ شيڊول', 'ايونٽ پلاننگ', 'رضاڪار ڪوآرڊينيشن', 'پروگرام رپورٽنگ'],
        nextTitle: 'مستقبل جو ڊجيٽل ورڪ فلو',
        nextText:
          'ايندڙ مرحلي ۾ ايونٽ درخواستون، حاضري لسٽ، رضاڪار ڊيوٽي چارٽ ۽ ايونٽ رپورٽون شامل ٿي سگهن ٿيون.',
        primaryCta: 'ميمبرشپ لاءِ اپلائي ڪريو',
        secondaryCta: 'ايونٽس ڏسو',
      },
    },
  },
  finance: {
    icon: Landmark,
    accent: 'finance',
    copy: {
      en: {
        eyebrow: 'MBJP Department Gateway',
        badge: 'Finance Department',
        title: 'Fees, donations, receipts and finance records',
        localName: 'شعبہ مالیات',
        description:
          'Finance Department supports transparent coordination for membership fees, donations, receipts and verified financial records.',
        status: 'Department page · donation workflow already available',
        purposeTitle: 'Department Purpose',
        purposeText:
          'Coordinate member fee status, donation submissions, receipt follow-up, donor records and finance reporting support.',
        workTitle: 'Core work areas',
        workItems: ['Membership fee coordination', 'Donation receipt review', 'Finance records', 'Donor follow-up'],
        nextTitle: 'Current app connection',
        nextText:
          'The existing donation and finance review modules remain unchanged. This department page gives users a clear public entry point.',
        primaryCta: 'Submit Donation',
        secondaryCta: 'Apply for Membership',
      },
      ur: {
        eyebrow: 'MBJP شعبہ گیٹ وے',
        badge: 'شعبہ مالیات',
        title: 'فیس، عطیات، رسیدیں اور فنانس ریکارڈز',
        localName: 'Finance Department',
        description:
          'فنانس ڈیپارٹمنٹ ممبرشپ فیس، عطیات، رسیدوں اور تصدیق شدہ مالی ریکارڈز کے لیے شفاف کوآرڈینیشن فراہم کرتا ہے۔',
        status: 'شعبہ صفحہ · ڈونیشن ورک فلو پہلے سے موجود ہے',
        purposeTitle: 'شعبہ کا مقصد',
        purposeText:
          'ممبر فیس اسٹیٹس، عطیہ جمع کرانے، رسید فالو اَپ، ڈونر ریکارڈز اور فنانس رپورٹنگ سپورٹ کوآرڈینیٹ کرنا۔',
        workTitle: 'بنیادی کام',
        workItems: ['ممبرشپ فیس کوآرڈینیشن', 'ڈونیشن رسید ریویو', 'فنانس ریکارڈز', 'ڈونر فالو اَپ'],
        nextTitle: 'موجودہ ایپ کنکشن',
        nextText:
          'موجودہ ڈونیشن اور فنانس ریویو ماڈیولز اپنی جگہ برقرار ہیں۔ یہ شعبہ صفحہ صارفین کے لیے واضح پبلک انٹری پوائنٹ ہے۔',
        primaryCta: 'عطیہ جمع کریں',
        secondaryCta: 'ممبرشپ کے لیے اپلائی کریں',
      },
      sd: {
        eyebrow: 'MBJP شعبو گيٽ وي',
        badge: 'شعبو ماليات',
        title: 'فيس، عطيا، رسيدون ۽ فنانس رڪارڊز',
        localName: 'Finance Department',
        description:
          'فنانس ڊپارٽمينٽ ميمبرشپ فيس، عطيا، رسيدن ۽ تصديق ٿيل مالي رڪارڊز لاءِ شفاف ڪوآرڊينيشن فراهم ڪري ٿو.',
        status: 'شعبو صفحو · ڊونيشن ورڪ فلو اڳ ئي موجود آهي',
        purposeTitle: 'شعبي جو مقصد',
        purposeText:
          'ميمبر فيس اسٽيٽس، عطيو جمع ڪرائڻ، رسيد فالو اَپ، ڊونر رڪارڊ ۽ فنانس رپورٽنگ سپورٽ ڪوآرڊينيٽ ڪرڻ.',
        workTitle: 'بنيادي ڪم',
        workItems: ['ميمبرشپ فيس ڪوآرڊينيشن', 'ڊونيشن رسيد ريويو', 'فنانس رڪارڊز', 'ڊونر فالو اَپ'],
        nextTitle: 'موجوده ايپ ڪنيڪشن',
        nextText:
          'موجوده ڊونيشن ۽ فنانس ريويو ماڊيولز برقرار آهن. هي شعبو صفحو يوزرز لاءِ واضح عوامي انٽري پوائنٽ آهي.',
        primaryCta: 'عطيو جمع ڪريو',
        secondaryCta: 'ميمبرشپ لاءِ اپلائي ڪريو',
      },
    },
  },
  sports: {
    icon: Trophy,
    accent: 'sports',
    copy: {
      en: {
        eyebrow: 'MBJP Department Gateway',
        badge: 'Sports Department',
        title: 'Sports events and youth activities',
        localName: 'شعبہ کھیل',
        description:
          'Sports Department supports healthy community activities, youth participation, tournaments and sports event coordination.',
        status: 'Department page · future activity registration can be added',
        purposeTitle: 'Department Purpose',
        purposeText:
          'Promote positive youth engagement through sports programs, event planning and district-level community participation.',
        workTitle: 'Core work areas',
        workItems: ['Sports event planning', 'Youth participation', 'Tournament coordination', 'Healthy activity promotion'],
        nextTitle: 'Future digital workflow',
        nextText:
          'A future phase can add sports event registration, team lists, fixture schedules and result reporting.',
        primaryCta: 'Apply for Membership',
        secondaryCta: 'Contact MBJP',
      },
      ur: {
        eyebrow: 'MBJP شعبہ گیٹ وے',
        badge: 'شعبہ کھیل',
        title: 'اسپورٹس ایونٹس اور نوجوانوں کی سرگرمیاں',
        localName: 'Sports Department',
        description:
          'اسپورٹس ڈیپارٹمنٹ صحت مند کمیونٹی سرگرمیوں، نوجوانوں کی شرکت، ٹورنامنٹس اور کھیلوں کے ایونٹس کوآرڈینیٹ کرے گا۔',
        status: 'شعبہ صفحہ · مستقبل میں سرگرمی رجسٹریشن شامل ہو سکتی ہے',
        purposeTitle: 'شعبہ کا مقصد',
        purposeText:
          'اسپورٹس پروگرامز، ایونٹ پلاننگ اور ضلع سطح پر کمیونٹی شرکت کے ذریعے نوجوانوں کو مثبت سرگرمیوں میں شامل کرنا۔',
        workTitle: 'بنیادی کام',
        workItems: ['اسپورٹس ایونٹ پلاننگ', 'نوجوانوں کی شرکت', 'ٹورنامنٹ کوآرڈینیشن', 'صحت مند سرگرمیوں کا فروغ'],
        nextTitle: 'مستقبل کا ڈیجیٹل ورک فلو',
        nextText:
          'آئندہ مرحلے میں اسپورٹس ایونٹ رجسٹریشن، ٹیم لسٹ، فکسچر شیڈول اور رزلٹ رپورٹنگ شامل ہو سکتی ہے۔',
        primaryCta: 'ممبرشپ کے لیے اپلائی کریں',
        secondaryCta: 'MBJP سے رابطہ',
      },
      sd: {
        eyebrow: 'MBJP شعبو گيٽ وي',
        badge: 'شعبو راندين',
        title: 'راندين جا ايونٽ ۽ نوجوانن جون سرگرميون',
        localName: 'Sports Department',
        description:
          'اسپورٽس ڊپارٽمينٽ صحتمند ڪميونٽي سرگرمين، نوجوانن جي شرڪت، ٽورنامينٽس ۽ راندين جي ايونٽس کي ڪوآرڊينيٽ ڪندو.',
        status: 'شعبو صفحو · مستقبل ۾ سرگرمي رجسٽريشن شامل ٿي سگهي ٿي',
        purposeTitle: 'شعبي جو مقصد',
        purposeText:
          'راندين جي پروگرامن، ايونٽ پلاننگ ۽ ضلعي سطح تي ڪميونٽي شرڪت ذريعي نوجوانن کي مثبت سرگرمين ۾ شامل ڪرڻ.',
        workTitle: 'بنيادي ڪم',
        workItems: ['راندين جي ايونٽ پلاننگ', 'نوجوانن جي شرڪت', 'ٽورنامينٽ ڪوآرڊينيشن', 'صحتمند سرگرمين جو فروغ'],
        nextTitle: 'مستقبل جو ڊجيٽل ورڪ فلو',
        nextText:
          'ايندڙ مرحلي ۾ اسپورٽس ايونٽ رجسٽريشن، ٽيم لسٽ، فڪسچر شيڊول ۽ رزلٽ رپورٽنگ شامل ٿي سگهي ٿي.',
        primaryCta: 'ميمبرشپ لاءِ اپلائي ڪريو',
        secondaryCta: 'MBJP سان رابطو',
      },
    },
  },
  mediaMarketing: {
    icon: FileText,
    accent: 'media',
    copy: {
      en: {
        eyebrow: 'MBJP Department Gateway',
        badge: 'Media & Marketing Department',
        title: 'Announcements, campaigns and media coordination',
        localName: 'شعبہ اطلاعات و نشریات',
        description:
          'Media & Marketing Department manages public announcements, communication material, campaigns and social media coordination.',
        status: 'Department page · media posting workflow can be added later',
        purposeTitle: 'Department Purpose',
        purposeText:
          'Prepare updates, collect activity content, publish announcements and keep MBJP communication clear and consistent.',
        workTitle: 'Core work areas',
        workItems: ['Public announcements', 'Social media updates', 'Campaign material', 'Activity coverage'],
        nextTitle: 'Future digital workflow',
        nextText:
          'A future phase can add media request forms, approval workflow, post archive and campaign calendar.',
        primaryCta: 'Apply for Membership',
        secondaryCta: 'Read News',
      },
      ur: {
        eyebrow: 'MBJP شعبہ گیٹ وے',
        badge: 'شعبہ اطلاعات و نشریات',
        title: 'اعلانات، مہمات اور میڈیا کوآرڈینیشن',
        localName: 'Media & Marketing Department',
        description:
          'میڈیا اینڈ مارکیٹنگ ڈیپارٹمنٹ پبلک اعلانات، کمیونیکیشن مواد، مہمات اور سوشل میڈیا کوآرڈینیشن سنبھالتا ہے۔',
        status: 'شعبہ صفحہ · میڈیا پوسٹنگ ورک فلو بعد میں شامل ہو سکتا ہے',
        purposeTitle: 'شعبہ کا مقصد',
        purposeText:
          'اپڈیٹس تیار کرنا، سرگرمیوں کا مواد جمع کرنا، اعلانات شائع کرنا اور MBJP کمیونیکیشن کو واضح رکھنا۔',
        workTitle: 'بنیادی کام',
        workItems: ['پبلک اعلانات', 'سوشل میڈیا اپڈیٹس', 'مہمات کا مواد', 'سرگرمی کوریج'],
        nextTitle: 'مستقبل کا ڈیجیٹل ورک فلو',
        nextText:
          'آئندہ مرحلے میں میڈیا درخواست فارم، اپروول ورک فلو، پوسٹ آرکائیو اور مہم کیلنڈر شامل ہو سکتے ہیں۔',
        primaryCta: 'ممبرشپ کے لیے اپلائی کریں',
        secondaryCta: 'نیوز پڑھیں',
      },
      sd: {
        eyebrow: 'MBJP شعبو گيٽ وي',
        badge: 'شعبو اطلاعات ۽ نشريات',
        title: 'اعلان، مهمون ۽ ميڊيا ڪوآرڊينيشن',
        localName: 'Media & Marketing Department',
        description:
          'ميڊيا اينڊ مارڪيٽنگ ڊپارٽمينٽ عوامي اعلان، ڪميونيڪيشن مواد، مهمون ۽ سوشل ميڊيا ڪوآرڊينيشن سنڀاليندو آهي.',
        status: 'شعبو صفحو · ميڊيا پوسٽنگ ورڪ فلو بعد ۾ شامل ٿي سگهي ٿو',
        purposeTitle: 'شعبي جو مقصد',
        purposeText:
          'اپڊيٽس تيار ڪرڻ، سرگرمين جو مواد گڏ ڪرڻ، اعلان شايع ڪرڻ ۽ MBJP ڪميونيڪيشن کي واضح رکڻ.',
        workTitle: 'بنيادي ڪم',
        workItems: ['عوامي اعلان', 'سوشل ميڊيا اپڊيٽس', 'مهمن جو مواد', 'سرگرمي ڪوريج'],
        nextTitle: 'مستقبل جو ڊجيٽل ورڪ فلو',
        nextText:
          'ايندڙ مرحلي ۾ ميڊيا درخواست فارم، اپروول ورڪ فلو، پوسٽ آرڪائيو ۽ مهم ڪيلنڊر شامل ٿي سگهن ٿا.',
        primaryCta: 'ميمبرشپ لاءِ اپلائي ڪريو',
        secondaryCta: 'نيوز پڙهو',
      },
    },
  },
  publicRelation: {
    icon: Network,
    accent: 'relations',
    copy: {
      en: {
        eyebrow: 'MBJP Department Gateway',
        badge: 'Public Relation Department',
        title: 'Community relations and public coordination',
        localName: 'شعبہ تعلقات عامہ',
        description:
          'Public Relation Department supports community outreach, public coordination, member facilitation and liaison work.',
        status: 'Department page · public coordination workflow can be added later',
        purposeTitle: 'Department Purpose',
        purposeText:
          'Build trusted relationships between MBJP, members, community representatives and public stakeholders.',
        workTitle: 'Core work areas',
        workItems: ['Community contact', 'Member facilitation', 'Coordination follow-up', 'Public liaison support'],
        nextTitle: 'Future digital workflow',
        nextText:
          'A future phase can add public request tracking, contact logs, area-wise facilitation and follow-up notes.',
        primaryCta: 'Apply for Membership',
        secondaryCta: 'Contact MBJP',
      },
      ur: {
        eyebrow: 'MBJP شعبہ گیٹ وے',
        badge: 'شعبہ تعلقات عامہ',
        title: 'کمیونٹی تعلقات اور پبلک کوآرڈینیشن',
        localName: 'Public Relation Department',
        description:
          'پبلک ریلیشن ڈیپارٹمنٹ کمیونٹی آؤٹ ریچ، پبلک کوآرڈینیشن، ممبر سہولت کاری اور رابطہ کاری میں مدد کرے گا۔',
        status: 'شعبہ صفحہ · پبلک کوآرڈینیشن ورک فلو بعد میں شامل ہو سکتا ہے',
        purposeTitle: 'شعبہ کا مقصد',
        purposeText:
          'MBJP، ممبران، کمیونٹی نمائندوں اور پبلک اسٹیک ہولڈرز کے درمیان قابل اعتماد تعلقات قائم کرنا۔',
        workTitle: 'بنیادی کام',
        workItems: ['کمیونٹی رابطہ', 'ممبر سہولت کاری', 'کوآرڈینیشن فالو اَپ', 'پبلک رابطہ سپورٹ'],
        nextTitle: 'مستقبل کا ڈیجیٹل ورک فلو',
        nextText:
          'آئندہ مرحلے میں پبلک درخواست ٹریکنگ، کانٹیکٹ لاگز، علاقہ وار سہولت کاری اور فالو اَپ نوٹس شامل ہو سکتے ہیں۔',
        primaryCta: 'ممبرشپ کے لیے اپلائی کریں',
        secondaryCta: 'MBJP سے رابطہ',
      },
      sd: {
        eyebrow: 'MBJP شعبو گيٽ وي',
        badge: 'شعبو عوامي تعلقات',
        title: 'ڪميونٽي تعلقات ۽ عوامي ڪوآرڊينيشن',
        localName: 'Public Relation Department',
        description:
          'پبلڪ ريليشن ڊپارٽمينٽ ڪميونٽي آئوٽ ريچ، عوامي ڪوآرڊينيشن، ميمبر سهولت ڪاري ۽ رابطا ڪاري ۾ مدد ڪندو.',
        status: 'شعبو صفحو · عوامي ڪوآرڊينيشن ورڪ فلو بعد ۾ شامل ٿي سگهي ٿو',
        purposeTitle: 'شعبي جو مقصد',
        purposeText:
          'MBJP، ميمبرن، ڪميونٽي نمائندن ۽ عوامي اسٽيڪ هولڊرز جي وچ ۾ قابل اعتماد تعلقات قائم ڪرڻ.',
        workTitle: 'بنيادي ڪم',
        workItems: ['ڪميونٽي رابطو', 'ميمبر سهولت ڪاري', 'ڪوآرڊينيشن فالو اَپ', 'عوامي رابطو سپورٽ'],
        nextTitle: 'مستقبل جو ڊجيٽل ورڪ فلو',
        nextText:
          'ايندڙ مرحلي ۾ عوامي درخواست ٽريڪنگ، ڪانٽيڪٽ لاگز، علائقي وار سهولت ڪاري ۽ فالو اَپ نوٽس شامل ٿي سگهن ٿا.',
        primaryCta: 'ميمبرشپ لاءِ اپلائي ڪريو',
        secondaryCta: 'MBJP سان رابطو',
      },
    },
  },
  ambulance: {
    icon: HeartPulse,
    accent: 'ambulance',
    copy: {
      en: {
        eyebrow: 'MBJP Department Gateway',
        badge: 'Ambulance Department',
        title: 'Emergency ambulance and patient support coordination',
        localName: 'شعبہ ایمبولینس',
        description:
          'Ambulance Department is introduced as a coordination gateway for emergency response, patient facilitation and ambulance-related support.',
        status: 'Department page · emergency workflow can be digitized in a future phase',
        purposeTitle: 'Department Purpose',
        purposeText:
          'Coordinate emergency assistance requests, patient movement support, hospital contact and ambulance facilitation where available.',
        workTitle: 'Core work areas',
        workItems: ['Emergency coordination', 'Patient facilitation', 'Hospital contact support', 'Ambulance follow-up'],
        nextTitle: 'Future digital workflow',
        nextText:
          'A future phase can add emergency request intake, response logs, priority tagging and ambulance availability tracking.',
        primaryCta: 'Apply for Membership',
        secondaryCta: 'Contact MBJP',
      },
      ur: {
        eyebrow: 'MBJP شعبہ گیٹ وے',
        badge: 'شعبہ ایمبولینس',
        title: 'ایمرجنسی ایمبولینس اور مریض سپورٹ کوآرڈینیشن',
        localName: 'Ambulance Department',
        description:
          'ایمبولینس ڈیپارٹمنٹ ایمرجنسی رسپانس، مریض سہولت کاری اور ایمبولینس سے متعلق سپورٹ کے لیے کوآرڈینیشن گیٹ وے ہے۔',
        status: 'شعبہ صفحہ · ایمرجنسی ورک فلو مستقبل میں ڈیجیٹائز ہو سکتا ہے',
        purposeTitle: 'شعبہ کا مقصد',
        purposeText:
          'ایمرجنسی مدد کی درخواستیں، مریض منتقلی سپورٹ، اسپتال رابطہ اور دستیاب ایمبولینس سہولت کاری کوآرڈینیٹ کرنا۔',
        workTitle: 'بنیادی کام',
        workItems: ['ایمرجنسی کوآرڈینیشن', 'مریض سہولت کاری', 'اسپتال رابطہ سپورٹ', 'ایمبولینس فالو اَپ'],
        nextTitle: 'مستقبل کا ڈیجیٹل ورک فلو',
        nextText:
          'آئندہ مرحلے میں ایمرجنسی درخواست، رسپانس لاگز، ترجیحی ٹیگنگ اور ایمبولینس دستیابی ٹریکنگ شامل ہو سکتی ہے۔',
        primaryCta: 'ممبرشپ کے لیے اپلائی کریں',
        secondaryCta: 'MBJP سے رابطہ',
      },
      sd: {
        eyebrow: 'MBJP شعبو گيٽ وي',
        badge: 'شعبو ايمبولينس',
        title: 'ايمرجنسي ايمبولينس ۽ مريض سپورٽ ڪوآرڊينيشن',
        localName: 'Ambulance Department',
        description:
          'ايمبولينس ڊپارٽمينٽ ايمرجنسي رسپانس، مريض سهولت ڪاري ۽ ايمبولينس متعلق سپورٽ لاءِ ڪوآرڊينيشن گيٽ وي آهي.',
        status: 'شعبو صفحو · ايمرجنسي ورڪ فلو مستقبل ۾ ڊجيٽائز ٿي سگهي ٿو',
        purposeTitle: 'شعبي جو مقصد',
        purposeText:
          'ايمرجنسي مدد جون درخواستون، مريض منتقلي سپورٽ، اسپتال رابطو ۽ موجود ايمبولينس سهولت ڪاري ڪوآرڊينيٽ ڪرڻ.',
        workTitle: 'بنيادي ڪم',
        workItems: ['ايمرجنسي ڪوآرڊينيشن', 'مريض سهولت ڪاري', 'اسپتال رابطو سپورٽ', 'ايمبولينس فالو اَپ'],
        nextTitle: 'مستقبل جو ڊجيٽل ورڪ فلو',
        nextText:
          'ايندڙ مرحلي ۾ ايمرجنسي درخواست، رسپانس لاگز، ترجيحي ٽيگنگ ۽ ايمبولينس موجودگي ٽريڪنگ شامل ٿي سگهي ٿي.',
        primaryCta: 'ميمبرشپ لاءِ اپلائي ڪريو',
        secondaryCta: 'MBJP سان رابطو',
      },
    },
  },
} satisfies Record<string, DepartmentProgram>

export function DepartmentProgramPage({ program }: { program: DepartmentProgram }) {
  const { language, direction } = useI18n()
  const copy = program.copy[language as AppLanguage]
  const Icon = program.icon
  const textAlignClass = direction === 'rtl' ? 'text-right' : 'text-left'
  const accentClass = accentClasses[program.accent]
  const secondaryTo = copy.secondaryCta.toLowerCase().includes('event') || copy.secondaryCta.includes('ایونٹس') || copy.secondaryCta.includes('ايونٽس')
    ? '/events'
    : copy.secondaryCta.toLowerCase().includes('news') || copy.secondaryCta.includes('نیوز') || copy.secondaryCta.includes('نيوز')
      ? '/news'
      : '/contact'
  const primaryTo = copy.primaryCta.toLowerCase().includes('donation') || copy.primaryCta.includes('عطیہ') || copy.primaryCta.includes('عطيو')
    ? '/donate'
    : '/signup'

  return (
    <main className="min-h-screen bg-[#fbf7ef]" dir="ltr">
      <section className={`relative overflow-hidden bg-gradient-to-br ${accentClass} px-4 py-16 text-white md:py-24`}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#d8a949] blur-3xl" />
          <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-emerald-400 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_360px] lg:items-center">
          <div className={`max-w-4xl ${textAlignClass}`} dir={direction}>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-white/90">
              <Icon className="h-4 w-4 text-[#f2d48f]" />
              {copy.eyebrow}
            </div>

            <p className="mt-5 text-sm font-black uppercase tracking-[0.25em] text-[#f2d48f]">
              {copy.badge}
            </p>
            <h1 className="mt-3 text-4xl font-black leading-tight tracking-tight md:text-6xl">
              {copy.title}
            </h1>
            <p className="mt-3 text-2xl font-semibold text-white/80" dir="rtl">
              {copy.localName}
            </p>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">
              {copy.description}
            </p>

            <div className={`mt-8 flex flex-col gap-3 sm:flex-row ${direction === 'rtl' ? 'sm:justify-end' : ''}`}>
              <Link
                to={primaryTo}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#d8a949] px-6 py-3 font-black text-slate-950 no-underline transition hover:bg-[#f2d48f]"
              >
                {copy.primaryCta}
                <ArrowRight className={`h-4 w-4 ${direction === 'rtl' ? 'rotate-180' : ''}`} />
              </Link>
              <Link
                to={secondaryTo}
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/10 px-6 py-3 font-black text-white no-underline transition hover:bg-white/20"
              >
                {copy.secondaryCta}
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur" dir={direction}>
            <div className={`flex items-start gap-4 ${textAlignClass}`}>
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white text-emerald-950 shadow-xl">
                <Icon className="h-8 w-8" />
              </div>
              <div>
                <p className="m-0 text-xs font-black uppercase tracking-[0.2em] text-[#f2d48f]">
                  Status
                </p>
                <p className="mt-2 text-sm font-semibold leading-6 text-white/80">
                  {copy.status}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 md:py-16">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1fr_1fr]">
          <article className={`rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8 ${textAlignClass}`} dir={direction}>
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-800">
              <Users className="h-6 w-6" />
            </div>
            <h2 className="m-0 text-2xl font-black text-slate-950">{copy.purposeTitle}</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">{copy.purposeText}</p>
          </article>

          <article className={`rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8 ${textAlignClass}`} dir={direction}>
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50 text-[#9a6a12]">
              <FileText className="h-6 w-6" />
            </div>
            <h2 className="m-0 text-2xl font-black text-slate-950">{copy.workTitle}</h2>
            <div className="mt-5 grid gap-3">
              {copy.workItems.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-3 text-sm font-bold text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-800" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </article>
        </div>

        <div className={`mx-auto mt-6 max-w-6xl rounded-[2rem] border border-emerald-900/10 bg-white p-6 shadow-sm md:p-8 ${textAlignClass}`} dir={direction}>
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="m-0 text-xs font-black uppercase tracking-[0.2em] text-emerald-900">MBJP Digital Roadmap</p>
              <h2 className="mt-2 text-2xl font-black text-slate-950">{copy.nextTitle}</h2>
              <p className="mt-3 max-w-3xl text-base leading-8 text-slate-600">{copy.nextText}</p>
            </div>
            <Link
              to="/programs/education"
              className="inline-flex shrink-0 items-center justify-center rounded-xl bg-emerald-950 px-5 py-3 text-sm font-black text-white no-underline transition hover:bg-emerald-900"
            >
              Programs
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
