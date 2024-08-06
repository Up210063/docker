import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { LoginPage } from './components/Login/pages/LoginPage'
import { RegisterPage } from './components/Login/pages/RegisterPage'
import { InicioPage } from './components/Inicio/pages/InicioPage';
import { ClimaPage } from './components/Clima/pages/ClimaPage';
import { PoliticaPage } from './components/Politica/pages/PoliticaPage'
import { DeportesPage } from './components/Deportes/pages/DeportesPage'
import { TendenciasPage } from './components/Tendencias/pages/TendenciasPage'
import { EntretenimientoPage } from './components/Entretenimiento/pages/EntretenimientoPage';
import { NewNoticePage } from './components/NewNotice/pages/NewNoticePage';
import { ListNoticies } from './components/ListNotices/page/ListNoticies';
import { Aside } from './components/common';

export const RouterApp = () => {
  return (
    <BrowserRouter>
        <div className='cms'>
          <Routes>
            <Route path='/' element={ <LoginPage /> } />
            <Route path='registrar' element={ <RegisterPage /> } />
            <Route path='inicio' element={ <InicioPage /> } />
            <Route path='clima' element={ <ClimaPage/> } />
            <Route path='entretenimiento' element={ <EntretenimientoPage /> } />
            <Route path='politica' element={ <PoliticaPage /> } />
            <Route path='deportes' element={ <DeportesPage /> } />
            <Route path='tendencias' element={ <TendenciasPage /> } />
            <Route path='nueva-noticia' element={ <NewNoticePage /> } />
            <Route path='lista-noticias' element={ <ListNoticies /> } />
          </Routes>
        </div>
        <Aside />
    </BrowserRouter>
  )
}