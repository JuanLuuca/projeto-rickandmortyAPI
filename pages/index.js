import Head from 'next/head';
import styled from 'styled-components';

export const getServerSideProps = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character");

  const data = await response.json();

  return {
    props: {
      repo: data
    }
  }
}


export default function Home({ repo }) {
  return (
    <div>
      <Head>
        <title>Rick and Morty Api ServerSideProps</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        {repo.results.map((repo) => (
            <Content key={repo.id}>
              <AreaImage>
                <img src={repo.image} />
              </AreaImage>
              <AreaText>
                <h2>{repo.name}</h2>
                <p>{repo.status} - {repo.species}</p>
                <p id="OriginClass">Origin:</p>
                <p id="OriginName">{repo.origin.name}</p>
                <p id="OriginClass">Location:</p>
                <p id="OriginName">{repo.location.name}</p>
              </AreaText>
            </Content>
        ))}
      </Container>
    </div>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  margin-top: 20px;

  @media screen and (max-width: 414px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const Content = styled.div`
  display: flex;
  margin-left: 10px;
  background-color: #1b1e23;
  height: 250px;
  width: 600px;
  border-radius: 10px;
`;
const AreaImage = styled.div`

  img {
    height: 250px;
    width: 250px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
`;
const AreaText = styled.div`
  margin: -10px 15px;

  h2 {
    font-size: 1.5rem;
    color: #f5f5f5;
    cursor: pointer;

    &:hover {
      color: #f08d49;
    }
  }

  p {
    font-size: 16px;
    font-weight: 500;
    color: #ffffff;
    margin-top: -15px;
  }

  #OriginClass {
    color: rgb(158, 158, 158);
    font-size: 16px;
    font-weight: 500;
    margin-top: 30px;
    margin-bottom: 21px;
  }

  #OriginName {
    color: rgb(245, 245, 245);
    font-weight: 400;
    cursor: pointer;

    &:hover {
      color: #f08d49;
    }
  }
`;