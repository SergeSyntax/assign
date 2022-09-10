import { useRouter } from 'next/router';

interface TabAttributes {
  href: string;
}

export const useGetCurrentTabValue = (tabs: readonly TabAttributes[]) => {
  const { pathname } = useRouter();
  return tabs.findIndex((tab) => tab.href === pathname);
};
