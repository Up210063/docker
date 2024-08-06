import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';

const swiperStyles = {
  height: '30rem',
  display: 'flex',
  textAlign: 'center',
  margin: '3rem 0',
};

export const SwiperCom = () => {
  return (
    <Swiper
      style={swiperStyles}
      modules={[Navigation, Pagination, Scrollbar, Autoplay]}
      autoplay={true}
      loop={true}
      spaceBetween={20}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        '480': {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        '768': {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        '920': {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        '1024': {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      }}
    >
      <SwiperSlide>
        <Card sx={{ height: '90%' }}>
          <CardMedia
            sx={{ height: '82%' }}
            component="img"
            image="https://fundaciondelcorazon.com/images/stories/iStock-949190756.jpg"
            alt="Placeholder image"
          />
          <CardContent >
            <Typography
              variant="body2"
              textAlign={'left'}
              fontWeight={900}
            >
              Juegos Olimpicos París 2024
            </Typography>
            <Typography
              variant="body2"
              textAlign={'left'}
            >
              Encuentra toda la información sobre los deportes
            </Typography>
          </CardContent>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card sx={{ height: '90%' }}>
          <CardMedia
            sx={{ height: '82%' }}
            component="img"
            image="https://www.shutterstock.com/image-photo/heat-thermometer-shows-temperature-hot-600nw-2472353719.jpg"
            alt="Placeholder image"
          />
          <CardContent>
            <Typography
              variant="body2"
              textAlign={'left'}
              fontWeight={900}
              color="text.primary"
            >
              Altas temperaturas en todo México
            </Typography>
            <Typography
              variant="body2"
              textAlign={'left'}
              color="text.secondary"
            >
              El pasado mes de Julio fue uno de los meses más calurosos
            </Typography>
          </CardContent>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card sx={{ height: '90%' }}>
          <CardMedia
            sx={{ height: '82%' }}
            component="img"
            image="https://www.puromarketing.com/uploads/img/contents/2023/kiYbDK4qFmjt29zc56C3/upload/20230720122846.webp?rand=20230720122846"
            alt="Placeholder image"
          />
          <CardContent>
            <Typography
              variant="body2"
              textAlign={'left'}
              fontWeight={900}
              color="text.primary"
            >
              Las Mujeres toman el control
            </Typography>
            <Typography
              variant="body2"
              textAlign={'left'}
              color="text.secondary"
            >
              El movimiento feminista está haciendo cada vez más ruido
            </Typography>
          </CardContent>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card sx={{ height: '90%' }}>
          <CardMedia
            sx={{ height: '82%' }}
            component="img"
            image="https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Libraries/Production%20Library/13-12-2023-WFP_Sudan.jpg/image1170x530cropped.jpg"
            alt="Placeholder image"
          />
          <CardContent>
            <Typography
              variant="body2"
              textAlign={'left'}
              fontWeight={900}
              color="text.primary"
            >
              Más del 60% de niños sufren hambre
            </Typography>
            <Typography
              variant="body2"
              textAlign={'left'}
              color="text.secondary"
            >
              Los contientes de Asia y África con mayor pobreza
            </Typography>
          </CardContent>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card sx={{ height: '90%' }}>
          <CardMedia
            sx={{ height: '82%' }}
            component="img"
            image="https://peopleenespanol.com/thmb/rj04toZFcG4q2akqqaYdaRsOa6g=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Juanes-a695de6676944fde874a997737f58864.png"
            alt="Placeholder image"
          />
          <CardContent>
            <Typography
              variant="body2"
              textAlign={'left'}
              fontWeight={900}
              color="text.primary"
            >
              Juanes estrena nueva música este 2024
            </Typography>
            <Typography
              variant="body2"
              textAlign={'left'}
              color="text.secondary"
            >
              El cantante colombiano esta preparando nuevos éxitos en Julio
            </Typography>
          </CardContent>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card sx={{ height: '90%' }}>
          <CardMedia
            sx={{ height: '82%' }}
            component="img"
            image="https://peopleenespanol.com/thmb/NHbd7cxzOrPvDYoK3whmqcwmGfA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Shakira-10eafb220ef54fb590492cf95bda0d81.jpg"
            alt="Placeholder image"
          />
          <CardContent>
            <Typography
              variant="body2"
              textAlign={'left'}
              fontWeight={900}
              color="text.primary"
            >
              La final de la Copa América
            </Typography>
            <Typography
              variant="body2"
              textAlign={'left'}
              color="text.secondary"
            >
              En el medio tiempo se presentó Shakira.
            </Typography>
          </CardContent>
        </Card>
      </SwiperSlide>
    </Swiper>
  );
};
