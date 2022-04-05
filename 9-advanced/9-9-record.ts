{
  type PageInfo = {
    title: string;
  }

  type Page = 'home' | 'about' | 'contact';

  // 두 타입을 하나로 key, value 쌍으로 묶어준다. 
  const nav: Record<Page, PageInfo> = {
    home: { title: 'Home' },
    about: { title: 'about' },
    contact: { title: 'contact' },
  }
}