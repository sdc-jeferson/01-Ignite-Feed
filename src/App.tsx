import { Header } from "./components/Header";
import { Post, PostType } from "./components/Post";
import { Siderbar } from "./components/Siderbar";
import styles from "./App.module.css";
import "./global.css";

//author : {avatar_url : "", name : "", Office : ''}
//publishedAt : Date
// content : String

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/sdc-jeferson.png",
      name: "Jeferson Silva",
      role: "Analista de Sistema Mainframe",
    },

    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],

    publishedAt: new Date(2024, 5, 21),
  },

  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @Rocketseat",
    },

    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],

    publishedAt: new Date(2024, 5, 11),
  },
];

export const App = () => {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Siderbar />
        <div>
          {posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </div>
      </div>
    </>
  );
};
