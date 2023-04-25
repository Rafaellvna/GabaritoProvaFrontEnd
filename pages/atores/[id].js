import Pagina from '@/components/Pagina'
import apiFilmes from '@/services/apiFilmes'
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

function Atores({ ator, atores, filmesAtuou, seriesAtuou }) {
  return (
    <Pagina titulo={ator.name}>

      <Row>
        <Col md={4}>
          <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500/" + ator.profile_path} />
        </Col>
        <Col>
          <p><strong>Data de Nascimento: </strong>{ator.birthday}</p>
          <p><strong>Local de Nascimento: </strong>{ator.place_of_birth}</p>
          <p>{ator.biography}</p>
        </Col>
      </Row><br />

      <h2>Imagens</h2>
      <Row md={6}>
        {atores.map(item => (
          <Col>
            <Card.Img className='m-1' variant="top" src={"https://image.tmdb.org/t/p/w500/" + item.file_path} />
          </Col>
        ))}
      </Row><br />

      <h2>Filmes em que atuou</h2>
      <Row md={6}>
        {filmesAtuou.map(item => (
          <Col>
            <Card.Img className='m-1' variant="top" src={"https://image.tmdb.org/t/p/w500/" + item.poster_path} />
          </Col>
        ))}
      </Row><br />

      <h2>Séries de TV em que atuou</h2>
      <Row md={6}>
        {seriesAtuou.map(item => (
          <Col>
            <Card.Img className='m-1' variant="top" src={"https://image.tmdb.org/t/p/w500/" + item.poster_path} />
          </Col>
        ))}
      </Row>

    </Pagina>
  )
}

export async function getServerSideProps(context) {

  const id = context.params.id

  const resultado1 = await apiFilmes.get('/person/' + id)
  const ator = resultado1.data

  const resultado2 = await apiFilmes.get('/person/' + id + '/images')
  const atores = resultado2.data.profiles

  const resultado3 = await apiFilmes.get('/person/' + id + '/movie_credits')
  const filmesAtuou = resultado3.data.cast

  const resultado4 = await apiFilmes.get('/person/' + id + '/tv_credits')
  const seriesAtuou = resultado4.data.cast

  return {
    props: { ator, atores, filmesAtuou, seriesAtuou }, // will be passed to the page component as props
  }
}

export default Atores