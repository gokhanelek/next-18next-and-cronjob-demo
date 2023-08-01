import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";
export default function Home() {
  const { t } = useTranslation();
  return (
    <>
      <div>
        <span>{t("hello")}</span>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const locale =
    context.locale ?? process.env.NEXT_PUBLIC_DEFAULT_LANGUAGE ?? "en";
  return {
    props: {
      ...(await serverSideTranslations(locale, ["translations"])),
    },
  };
};
