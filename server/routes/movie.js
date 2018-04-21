var express = require('express');
var router = express.Router();

let all_movies = [
  {
    'id': 1,
    'name': '공조',
    'year': 2017,
    'director': '김성훈',
    'poster': 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'
  },
  {
    'id': 2,
    'name': '컨택트',
    'year': 2017,
    'director': '드니 빌뇌브',
    'poster': 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79437/79437_185.jpg'
  },
  {
    'id': 3,
    'name': '더킹',
    'year': 2017,
    'director': '한재림',
    'poster': 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79423/79423_185.jpg'
  },
  {
    'id': 4,
    'name': '모아나',
    'year': 2017,
    'director': '론 클레멘츠, 존 머스커',
    'poster': 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79316/79316_185.jpg'
  },
  {
    'id': 5,
    'name': '라이언',
    'year': 2017,
    'director': '가스 데이비스',
    'poster': 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79396/79396_185.jpg'
  },
  {
    'id': 6,
    'name': '너의 이름은',
    'year': 2017,
    'director': '신카이 마코토',
    'poster': 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79313/79313_1000.jpg'
  }
]

/* GET api listing. */
router.get('/', function(req, res, next) {
  res.json(all_movies);
});

/* GET api listing. */
router.get('/:id', function(req, res, next) {
  let id = req.params.id;
  // check 'No Content'
  if (id > all_movies.length) res.status(204);
  else res.json(all_movies[id - 1]);
});

module.exports = router;
