// artists
const Artist = function(name, date, path, text) {
  this.name = name; // img alt, artisc-card__header
  this.date = date; // artisc-card__years
  this.path = path; // img src
  this.text = text; // artist-card__text
  return this;
}

const artistDB = {
  girlandajo: new Artist(
    "Доменико Гирландайо",
    "2 июня 1448 — 11 января 1494",
    "img/artist-girlandajo.jpg",
    `Один из ведущих флорентийских художников Кватроченто, основатель художественной династии, которую продолжили его брат Давид и сын Ридольфо. Глава художественной мастерской, где юный Микеланджело в течение года овладевал профессиональными навыками. Автор фресковых циклов, в которых выпукло, со всевозможными подробностями показана домашняя жизнь библейских персонажей (в их роли выступают знатные граждане Флоренции в костюмах того времени).`
  ),
  dibindo: new Artist (
    "Бенедетто ди Биндо",
    "ок. 1380—85 — 19 сентября 1417",
    "img/dibindo.jpg",
    `Бенедетто ди&nbsp;Биндо остался в&nbsp;истории искусства как сиенский художник, так сказать, &laquo;второго ряда&raquo;, несмотря на&nbsp;то, что за&nbsp;свою короткую жизнь он&nbsp;выполнил ряд весьма престижных заказов, включая работы в&nbsp;Сиенском соборе. Обучение он&nbsp;прошёл у&nbsp;Таддео ди&nbsp;Бартоло, крупного сиенского мастера поздней готики, в&nbsp;боттеге которого Бенедетто трудился вместе с&nbsp;Грегорио ди&nbsp;Чекко. Наибольшее влияние на&nbsp;его творчество оказали работы Симоне Мартини, в&nbsp;частности в&nbsp;выборе колорита, а&nbsp;тонко проработанные лица его персонажей напоминают произведения Джованни да&nbsp;Милано. Первое документальное упоминание имени художника датируется 20&nbsp;ноября 1409&nbsp;года, когда он&nbsp;получил заказ на&nbsp;роспись двух деревянных статуй святых покровителей Сиены&nbsp;&mdash; св. Виктора и&nbsp;св. Савиния, выполненных скульптором Франческо ди&nbsp;Вальдамбрино для Сиенского собора. В&nbsp;1411&ndash;1412 годах Бенедетто работал над циклом фресок, посвящённых житию Марии в&nbsp;сакристии этого&nbsp;же собора. Согласно документам, ему помогали три художника&nbsp;&mdash; Гвалтьери ди&nbsp;Джованни, Никколо ди&nbsp;Нальдо и&nbsp;Джованни ди&nbsp;Биндино. Всего было расписано три капеллы сакристии.`
  ),
  ambdorjo: new Artist (
    "Бергоньоне, Амброджо",
    "1470 - 1523/1524",
    "img/ambdorjo.jpg",
    `Если судить о&nbsp;его истинных силах и&nbsp;своеобразных идеалах, его системе слабых и&nbsp;ясных цветов, будь&nbsp;то фреска, темпера или масло; его несколько тонкие и&nbsp;бледные типы, не&nbsp;лишенные чего-то, что напоминает нам о&nbsp;северном искусстве своей тевтонской сентиментальностью, а&nbsp;также их&nbsp;верностью портретной живописи; конфликт его инстинктивной любви к&nbsp;безмятежности и&nbsp;спокойствию с&nbsp;несколько вынужденной и&nbsp;заимствованной энергией в&nbsp;фигурах, требующих энергии, его консерватизм в&nbsp;вопросе легендарных и&nbsp;тщательно разнообразных фонов, чтобы судить об&nbsp;этих качествах мастера, как они есть, необходимо сначала изучить большую серию его фресок и&nbsp;запрестольных образов в&nbsp;Чертозе, а&nbsp;затем те&nbsp;остатки более поздних фресок и&nbsp;алтарей в&nbsp;Милане и&nbsp;Лоди, в&nbsp;которых мы&nbsp;находим влияние Леонардо и&nbsp;нового времени, смешивающееся&nbsp;с, но&nbsp;не&nbsp;вытесняющее , его первые пристрастия.`
  ),
  bissolo: new Artist (
    "Биссоло, Франческо",
    "1470-72 - 20 апреля 1554",
    "img/bissolo.jpg",
    "Его описывают как ученика Джованни Беллини. Он&nbsp;написал Христа, меняющего терновый венец на&nbsp;золотой, со&nbsp;святой Екатериной для церкви иль Реденторе, ныне находящейся в&nbsp;Галерее Академии в&nbsp;Венеции, и&nbsp;Санта-Джустину в&nbsp;соборе Тревизо. Он&nbsp;написал Святое Семейство с&nbsp;донором в&nbsp;пейзаже, найденном в&nbsp;Дейтонском художественном институте в&nbsp;Огайо, США."
  ),
  boltraffio: new Artist (
    "Больтраффио, Джованни",
    "1466 или 1467, Милан — 1516",
    "img/boltraffio.jpg",
    "Вазари сообщает, что художник происходил из&nbsp;аристократической семьи. Воспитанный в&nbsp;традициях Фоппы, Бернардо Дзенале и&nbsp;Амброджо Бергоньоне, он&nbsp;прошёл обучение в&nbsp;мастерской Леонардо. Его первое произведение &laquo;Воскресение Христа, святой Леонард и&nbsp;святая Лючия&raquo; выполнено в&nbsp;1491 году совместно с&nbsp;Марко д&rsquo;Оджоно для миланской церкви Сан-Джованни-сул-Муро. Был придворным художником Лодовико Моро и&nbsp;славился своими психологическими портретами. Больтраффио умер в&nbsp;возрасте 49&nbsp;лет и&nbsp;был похоронен на&nbsp;кладбище церкви Св. Паулы в&nbsp;Комито. Историки искусства предполагают, что фигура Младенца на&nbsp;картине Леонардо да&nbsp;Винчи &laquo;Мадонна Литта&raquo; принадлежит кисти Джованни Антонио Больтраффио. Известны подготовительные рисунки Больтраффио, в&nbsp;точности воспроизводящие эту фигуру."
  ),
  bonsinjori: new Artist (
    "Бонсиньори, Франческо",
    "ок. 1455 – 2 июля 1519",
    "img/bonsinjori.jpg",
    "Для Вероны в&nbsp;конце&nbsp;XV века творчество Бонсиньори становится обновлением монотонных последователей веронского художника Бенальо Франческо. Алтарный образ Мадонна во&nbsp;славе для веронской церкви Сан Паоло ин&nbsp;Кампо Марцио, яркий и&nbsp;полный света, в&nbsp;красных и&nbsp;коричневых тонах стал характерным для веронской живописи того времени. Здесь чётко прослеживается влияние Андреа Мантеньи, наставника Бонсиньори, по&nbsp;мнению Вазари, прежде всего в&nbsp;образе Мадонны."
  ),
  botticini: new Artist (
    "Боттичини, Рафаэлло",
    "11 сентября 1477 г. — 1520 г.",
    "img/botticini.jpg",
    "Рафаэлло принадлежал к&nbsp;флорентийской артистической династии&nbsp;&mdash; его дед, Джованни ди&nbsp;Доменико, был известен как художник, расписывавший игральные карты (хотя учёные не&nbsp;исключают, что он&nbsp;мог заниматься и&nbsp;более серьёзной живописью); его отец&nbsp;&mdash; Франческо ди&nbsp;Джованни, был известным флорентийским мастером. Первые художественные навыки Рафаэлло получил в&nbsp;мастерской отца; с&nbsp;этой мастерской связан и&nbsp;ранний период его творчества. В&nbsp;1490-е годы, когда формировался художественный вкус Рафаэлло, мастерская его отца занималась в&nbsp;основном исполнением заказов в&nbsp;провинциальных городках в&nbsp;окрестностях Флоренции. В&nbsp;1498 году Франческо Боттичини скончался, Рафаэлло унаследовал мастерскую и&nbsp;продолжил работать в&nbsp;провинции. По&nbsp;мнению исследователей его творчества, это был художник скромного дарования, никогда не&nbsp;стремившийся завоевать высоких позиций в&nbsp;интеллектуальном и&nbsp;финансовом центре Тосканы&nbsp;&mdash; Флоренции, и&nbsp;довольствовавшийся заказами, которые ему давали провинциальные храмы. Его искусство было эклектичным, и&nbsp;наряду с&nbsp;влиянием отца включало связь с&nbsp;искусством Перуджино, Ридольфо Гирландайо, Лоренцо ди&nbsp;Креди, Фра Бартоломео и&nbsp;др."
  )
}