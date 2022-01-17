import { useRouter } from "next/router";
import MainContainer from "../../components/MainContainers";
import styles from '../../styles/user.module.scss';

export default function User({user}) {
  //const router = useRouter()
  const {query} = useRouter();
  //console.log(query);

  return(
    <MainContainer title="Пользователь" keywords={user.name}>
      <div className={styles.user}>
        <h1>Пользователь с id {query.id}</h1>
        <div>Имя пользователя - {user.name}</div>
      </div>
    </MainContainer>
  );
};

export async function getServerSideProps({params}) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
  const user = await response.json()

  return {
    props: {user}, // will be passed to the page component as props
  };
};
