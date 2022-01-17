import Head from "next/head";
import A from "../components/A";

const MainContainer = ({children, keywords, title}) => {
  return (
    <>
      <Head>
        <meta keywords={"nextjs " + keywords}></meta>
        <title>{title}</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <div className="navbar">
        <A href={'/'} text={'Главная'} />
        <A href={'/users'} text={'Пользователи'} />
      </div>
      <div>
        {children}
      </div>
      <style jsx>
            {`
              .navbar {
                background: orange;
                padding: 15px;
              }

            `}
      </style>
    </>
  );
};

export default MainContainer;