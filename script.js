// ---------------------------
// 問題データ
// ---------------------------
const questions = [
  {
    "id": 1,
      "subject": "生物基礎",
      "field": "生物の特徴",
      "unit": "生物の多様性と共通性",
      "questionText": "交配して生殖能力のある子（子孫）を残せる同じ特徴をもつ生物の集まり",
      "option1": "個体群",
      "option2": "科",
      "option3": "属",
      "option4": "種",
      "correctAnswerIndex": "種"
    },
    {
      "id": 2,
      "subject": "生物基礎",
      "field": "生物の特徴",
      "unit": "生物の多様性と共通性",
      "questionText": "世代を重ねる中で、生物の形質が変化し、新たな種が生まれる現象",
      "option1": "自然淘汰",
      "option2": "進化",
      "option3": "突然変異",
      "option4": "適応",
      "correctAnswerIndex": "進化"
    },
    {
      "id": 3,
      "subject": "生物基礎",
      "field": "生物の特徴",
      "unit": "生物の多様性と共通性",
      "questionText": "生物が共通の祖先からどのように分かれてきたかを示すつながり",
      "option1": "分類",
      "option2": "系統",
      "option3": "食物連鎖",
      "option4": "生態系",
      "correctAnswerIndex": "系統"
    },
    {
      "id": 4,
      "subject": "生物基礎",
      "field": "生物の特徴",
      "unit": "生物の多様性と共通性",
      "questionText": "生物の進化的な関係を樹木のように示した図",
      "option1": "食物網",
      "option2": "系統樹",
      "option3": "生態ピラミッド",
      "option4": "生息図",
      "correctAnswerIndex": "系統樹"
    },
    {
      "id": 5,
      "subject": "生物基礎",
      "field": "生物の特徴",
      "unit": "生物の多様性と共通性",
      "questionText": "生物の体を構成する最も基本的な単位",
      "option1": "組織",
      "option2": "細胞",
      "option3": "器官",
      "option4": "分子",
      "correctAnswerIndex": "細胞"
    },
    {
      "id": 6,
      "subject": "生物基礎",
      "field": "生物の特徴",
      "unit": "生物の多様性と共通性",
      "questionText": "遺伝情報（DNA）を保管し、細胞の働きを調節する細胞内の構造",
      "option1": "リボソーム",
      "option2": "核",
      "option3": "ミトコンドリア",
      "option4": "細胞膜",
      "correctAnswerIndex": "核"
    },
    {
      "id": 7,
      "subject": "生物基礎",
      "field": "生物の特徴",
      "unit": "生物の多様性と共通性",
      "questionText": "核と細胞膜の間の領域で、細胞小器官やサイトゾルを含む部分",
      "option1": "葉緑体",
      "option2": "細胞質",
      "option3": "細胞壁",
      "option4": "液胞",
      "correctAnswerIndex": "細胞質"
    },
    {
      "id": 8,
      "subject": "生物基礎",
      "field": "生物の特徴",
      "unit": "生物の多様性と共通性",
      "questionText": "細胞の内外を仕切り、物質の出入りを調節する膜",
      "option1": "核膜",
      "option2": "細胞膜",
      "option3": "葉緑体膜",
      "option4": "細胞壁",
      "correctAnswerIndex": "細胞膜"
    },
    {
      "id": 9,
      "subject": "生物基礎",
      "field": "生物の特徴",
      "unit": "生物の多様性と共通性",
      "questionText": "呼吸によってエネルギー（ATP）をつくる細胞小器官",
      "option1": "リソソーム",
      "option2": "ミトコンドリア",
      "option3": "葉緑体",
      "option4": "ゴルジ体",
      "correctAnswerIndex": "ミトコンドリア"
    },
    {
      "id": 10,
      "subject": "生物基礎",
      "field": "生物の特徴",
      "unit": "生物の多様性と共通性",
      "questionText": "光合成を行い、光エネルギーから有機物を合成する細胞小器官",
      "option1": "小胞体",
      "option2": "葉緑体",
      "option3": "ミトコンドリア",
      "option4": "液胞",
      "correctAnswerIndex": "葉緑体"
    },
    {
    "id": 11,
    "subject": "生物基礎",
    "field": "生物の特徴",
    "unit": "生物の多様性と共通性",
    "questionText": "光合成のときに光を吸収する色素",
    "option1": "ヘモグロビン",
    "option2": "クロロフィル",
    "option3": "メラニン",
    "option4": "カロテノイド",
    "correctAnswerIndex": "クロロフィル"
  },
  {
    "id": 12,
    "subject": "生物基礎",
    "field": "生物の特徴",
    "unit": "生物の多様性と共通性",
    "questionText": "細胞小器官を取り囲む液体状の部分で、多くの化学反応が起こる場所",
    "option1": "細胞液",
    "option2": "サイトゾル（細胞質基質）",
    "option3": "細胞質",
    "option4": "核液",
    "correctAnswerIndex": "サイトゾル（細胞質基質）"
  },
  {
    "id": 13,
    "subject": "生物基礎",
    "field": "生物の特徴",
    "unit": "生物の多様性と共通性",
    "questionText": "植物細胞で水や養分、老廃物などを蓄える袋状の構造",
    "option1": "リソソーム",
    "option2": "液胞",
    "option3": "小胞",
    "option4": "ペルオキシソーム",
    "correctAnswerIndex": "液胞"
  },
  {
    "id": 14,
    "subject": "生物基礎",
    "field": "生物の特徴",
    "unit": "生物の多様性と共通性",
    "questionText": "植物細胞などで細胞を保護し、形を保つ構造",
    "option1": "骨格",
    "option2": "細胞壁",
    "option3": "細胞膜",
    "option4": "カプセル",
    "correctAnswerIndex": "細胞壁"
  },
  {
    "id": 15,
    "subject": "生物基礎",
    "field": "生物の特徴",
    "unit": "生物の多様性と共通性",
    "questionText": "細胞内で特定の働きをもつ構造体（例：ミトコンドリア、葉緑体など）",
    "option1": "組織",
    "option2": "細胞小器官",
    "option3": "分子",
    "option4": "細胞骨格",
    "correctAnswerIndex": "細胞小器官"
  },
  {
    "id": 16,
    "subject": "生物基礎",
    "field": "生物の特徴",
    "unit": "生物の多様性と共通性",
    "questionText": "核をもつ細胞からできている生物",
    "option1": "原核生物",
    "option2": "真核生物",
    "option3": "単細胞生物",
    "option4": "多細胞生物",
    "correctAnswerIndex": "真核生物"
  },
  {
    "id": 17,
    "subject": "生物基礎",
    "field": "生物の特徴",
    "unit": "生物の多様性と共通性",
    "questionText": "核をもち、細胞小器官が発達している構造をもつ細胞",
    "option1": "動物細胞",
    "option2": "真核細胞",
    "option3": "植物細胞",
    "option4": "原核細胞",
    "correctAnswerIndex": "真核細胞"
  },
  {
    "id": 18,
    "subject": "生物基礎",
    "field": "生物の特徴",
    "unit": "生物の多様性と共通性",
    "questionText": "核をもたず、原核細胞からなる生物（例：細菌）",
    "option1": "真核生物",
    "option2": "原核生物",
    "option3": "真菌",
    "option4": "ウイルス",
    "correctAnswerIndex": "原核生物"
  },
  {
    "id": 19,
    "subject": "生物基礎",
    "field": "生物の特徴",
    "unit": "生物の多様性と共通性",
    "questionText": "核膜に包まれた核をもたない、単純な構造の細胞",
    "option1": "動物細胞",
    "option2": "原核細胞",
    "option3": "植物細胞",
    "option4": "真核細胞",
    "correctAnswerIndex": "原核細胞"
  },
  {
    "id": 20,
    "subject": "生物基礎",
    "field": "生物の特徴",
    "unit": "生物の多様性と共通性",
    "questionText": "細胞をもたず、生物の細胞内でしか増殖できない存在",
    "option1": "真菌",
    "option2": "ウイルス",
    "option3": "細菌",
    "option4": "原生生物",
    "correctAnswerIndex": "ウイルス"
  },
  {
    "id": 21,
    "subject": "生物基礎",
    "field": "生物の特徴",
    "unit": "生物の多様性と共通性",
    "questionText": "顕微鏡において、どれだけ近い2点を見分けられるかの能力",
    "option1": "倍率",
    "option2": "分解能",
    "option3": "焦点深度",
    "option4": "明るさ",
    "correctAnswerIndex": "分解能"
  },
  {
    "id": 22,
    "subject": "生物基礎",
    "field": "生物の特徴",
    "unit": "エネルギーと代謝",
    "questionText": "生体内で起こるすべての化学反応の総称",
    "option1": "同化",
    "option2": "代謝",
    "option3": "異化",
    "option4": "呼吸",
    "correctAnswerIndex": "代謝"
  },
  {
    "id": 23,
    "subject": "生物基礎",
    "field": "生物の特徴",
    "unit": "エネルギーと代謝",
    "questionText": "外部から取り入れた物質を材料に体内でより大きな物質を合成する反応",
    "option1": "分解",
    "option2": "同化",
    "option3": "異化",
    "option4": "呼吸",
    "correctAnswerIndex": "同化"
  },
  {
    "id": 24,
    "subject": "生物基礎",
    "field": "生物の特徴",
    "unit": "エネルギーと代謝",
    "questionText": "体内の物質を分解してエネルギーを得る反応",
    "option1": "合成",
    "option2": "異化",
    "option3": "同化",
    "option4": "光合成",
    "correctAnswerIndex": "異化"
  },
  {
    "id": 25,
    "subject": "生物基礎",
    "field": "生物の特徴",
    "unit": "エネルギーと代謝",
    "questionText": "細胞内でエネルギーを一時的に蓄え、必要なときに供給する高エネルギー化合物",
    "option1": "AMP",
    "option2": "ATP",
    "option3": "ADP",
    "option4": "DNA",
    "correctAnswerIndex": "ATP"
  },
  {
    "id": 26,
    "subject": "生物基礎",
    "field": "生物の特徴",
    "unit": "エネルギーと代謝",
    "questionText": "ATPからリン酸が1つ取れてエネルギーを放出した後の物質",
    "option1": "GTP",
    "option2": "ADP",
    "option3": "AMP",
    "option4": "CTP",
    "correctAnswerIndex": "ADP"
  },
  {
    "id": 27,
    "subject": "生物基礎",
    "field": "生物の特徴",
    "unit": "エネルギーと代謝",
    "questionText": "有機物を分解してエネルギー（ATP）を得る代謝反応",
    "option1": "発酵",
    "option2": "呼吸",
    "option3": "光合成",
    "option4": "同化",
    "correctAnswerIndex": "呼吸"
  },
  {
    "id": 28,
    "subject": "生物基礎",
    "field": "生物の特徴",
    "unit": "エネルギーと代謝",
    "questionText": "光エネルギーを利用して二酸化炭素と水から有機物を合成する反応",
    "option1": "発酵",
    "option2": "光合成",
    "option3": "呼吸",
    "option4": "分解",
    "correctAnswerIndex": "光合成"
  },
  {
    "id": 29,
    "subject": "生物基礎",
    "field": "生物の特徴",
    "unit": "エネルギーと代謝",
    "questionText": "化学反応の速度を高めるが、自身は変化しない物質",
    "option1": "生成物",
    "option2": "触媒",
    "option3": "基質",
    "option4": "阻害剤",
    "correctAnswerIndex": "触媒"
  },
  {
    "id": 30,
    "subject": "生物基礎",
    "field": "生物の特徴",
    "unit": "エネルギーと代謝",
    "questionText": "生体内で触媒として働くタンパク質",
    "option1": "抗体",
    "option2": "酵素",
    "option3": "ホルモン",
    "option4": "ビタミン",
    "correctAnswerIndex": "酵素"
  },
  {
    "id": 31,
    "subject": "生物基礎",
    "field": "生物の特徴",
    "unit": "エネルギーと代謝",
    "questionText": "酵素が作用する対象の物質",
    "option1": "補酵素",
    "option2": "基質",
    "option3": "生成物",
    "option4": "阻害剤",
    "correctAnswerIndex": "基質"
  },
  {
    "id": 32,
    "subject": "生物基礎",
    "field": "生物の特徴",
    "unit": "エネルギーと代謝",
    "questionText": "酵素が特定の基質にしか反応しない性質",
    "option1": "最適pH",
    "option2": "基質特異性",
    "option3": "変性",
    "option4": "最適温度",
    "correctAnswerIndex": "基質特異性"
  },
  {
    "id": 33,
    "subject": "生物基礎",
    "field": "遺伝子とそのはたらき",
    "unit": "遺伝情報とDNA",
    "questionText": "生物がもつ形や性質などの特徴のこと",
    "option1": "ゲノム",
    "option2": "形質",
    "option3": "遺伝子",
    "option4": "DNA",
    "correctAnswerIndex": "形質"
  },
  {
    "id": 34,
    "subject": "生物基礎",
    "field": "遺伝子とそのはたらき",
    "unit": "遺伝情報とDNA",
    "questionText": "親の形質が子に伝わる現象",
    "option1": "進化",
    "option2": "遺伝",
    "option3": "突然変異",
    "option4": "適応",
    "correctAnswerIndex": "遺伝"
  },
  {
    "id": 35,
    "subject": "生物基礎",
    "field": "遺伝子とそのはたらき",
    "unit": "遺伝情報とDNA",
    "questionText": "DNAに記録された、生物の形質を決めるための情報",
    "option1": "タンパク質",
    "option2": "遺伝情報",
    "option3": "染色体",
    "option4": "RNA",
    "correctAnswerIndex": "遺伝情報"
  },
  {
    "id": 36,
    "subject": "生物基礎",
    "field": "遺伝子とそのはたらき",
    "unit": "遺伝情報とDNA",
    "questionText": "遺伝情報を担い、特定の形質を決定するDNAの特定部分",
    "option1": "染色体",
    "option2": "遺伝子",
    "option3": "ゲノム",
    "option4": "核酸",
    "correctAnswerIndex": "遺伝子"
  },
  {
    "id": 37,
    "subject": "生物基礎",
    "field": "遺伝子とそのはたらき",
    "unit": "遺伝情報とDNA",
    "questionText": "生物の遺伝情報を担っている高分子化合物",
    "option1": "RNA",
    "option2": "DNA",
    "option3": "タンパク質",
    "option4": "脂質",
    "correctAnswerIndex": "DNA"
  },
  {
    "id": 38,
    "subject": "生物基礎",
    "field": "遺伝子とそのはたらき",
    "unit": "遺伝情報とDNA",
    "questionText": "DNAを構成する基本単位で、リン酸・糖・塩基からなる",
    "option1": "モノマー",
    "option2": "ヌクレオチド",
    "option3": "アミノ酸",
    "option4": "ポリマー",
    "correctAnswerIndex": "ヌクレオチド"
  },
  {
    "id": 39,
    "subject": "生物基礎",
    "field": "遺伝子とそのはたらき",
    "unit": "遺伝情報とDNA",
    "questionText": "ヌクレオチドに含まれる五炭糖で、DNAの構造をなす糖",
    "option1": "グルコース",
    "option2": "デオキシリボース",
    "option3": "リボース",
    "option4": "フルクトース",
    "correctAnswerIndex": "デオキシリボース"
  },
  {
    "id": 40,
    "subject": "生物基礎",
    "field": "遺伝子とそのはたらき",
    "unit": "遺伝情報とDNA",
    "questionText": "DNAを構成するヌクレオチドの一部で、4種類（A・T・G・C）がある",
    "option1": "糖",
    "option2": "塩基",
    "option3": "アミノ酸",
    "option4": "リン酸",
    "correctAnswerIndex": "塩基"
  },
  {
    "id": 41,
    "subject": "生物基礎",
    "field": "遺伝子とそのはたらき",
    "unit": "遺伝情報とDNA",
    "questionText": "ヌクレオチドが多数つながってできるDNAの鎖状構造",
    "option1": "ポリペプチド",
    "option2": "ヌクレオチド鎖",
    "option3": "アミノ酸配列",
    "option4": "二重らせん",
    "correctAnswerIndex": "ヌクレオチド鎖"
  },
  {
    "id": 42,
    "subject": "生物基礎",
    "field": "遺伝子とそのはたらき",
    "unit": "遺伝情報とDNA",
    "questionText": "DNAの構造を説明する、2本のヌクレオチド鎖がらせん状になった構造",
    "option1": "RNA",
    "option2": "二重らせん構造",
    "option3": "一本鎖DNA",
    "option4": "タンパク質構造",
    "correctAnswerIndex": "二重らせん構造"
  },
  {
    "id": 43,
    "subject": "生物基礎",
    "field": "遺伝子とそのはたらき",
    "unit": "遺伝情報とDNA",
    "questionText": "DNAで向かい合う2つの塩基が特定の組み合わせで結合したもの",
    "option1": "共有結合",
    "option2": "塩基対",
    "option3": "水素結合",
    "option4": "イオン結合",
    "correctAnswerIndex": "塩基対"
  },
  {
    "id": 44,
    "subject": "生物基礎",
    "field": "遺伝子とそのはたらき",
    "unit": "遺伝情報とDNA",
    "questionText": "DNAの塩基が、AとT、GとCのように特定の相手と結びつく性質",
    "option1": "翻訳",
    "option2": "相補性",
    "option3": "転写",
    "option4": "複製",
    "correctAnswerIndex": "相補性"
  },
  {
    "id": 45,
    "subject": "生物基礎",
    "field": "遺伝子とそのはたらき",
    "unit": "遺伝情報とDNA",
    "questionText": "DNA中ではアデニンとチミン、グアニンとシトシンが同数であるという法則",
    "option1": "遺伝暗号",
    "option2": "シャルガフの法則",
    "option3": "セントラルドグマ",
    "option4": "複製法則",
    "correctAnswerIndex": "シャルガフの法則"
  },
  {
    "id": 46,
    "subject": "生物基礎",
    "field": "遺伝子とそのはたらき",
    "unit": "遺伝情報とDNA",
    "questionText": "DNAにおける塩基（A・T・G・C）の並び順のこと",
    "option1": "コドン",
    "option2": "塩基配列",
    "option3": "遺伝暗号",
    "option4": "アンチコドン",
    "correctAnswerIndex": "塩基配列"
  },
  {
    "id": 47,
    "subject": "生物基礎",
    "field": "遺伝子とそのはたらき",
    "unit": "遺伝情報とDNA",
    "questionText": "ある細胞が、別の細胞由来のDNAを取り込んで形質を変化させる現象",
    "option1": "遺伝子組換え",
    "option2": "形質転換",
    "option3": "突然変異",
    "option4": "接合",
    "correctAnswerIndex": "形質転換"
  },
  {
    "id": 48,
    "subject": "生物基礎",
    "field": "遺伝子とそのはたらき",
    "unit": "遺伝情報とDNA",
    "questionText": "細胞が分裂し、新しい細胞をつくるために一定の順序で進む周期的な過程",
    "option1": "休眠期",
    "option2": "細胞周期",
    "option3": "成長期",
    "option4": "分化",
    "correctAnswerIndex": "細胞周期"
  },
  {
    "id": 49,
    "subject": "生物基礎",
    "field": "遺伝子とそのはたらき",
    "unit": "遺伝情報とDNA",
    "questionText": "細胞周期のうち、分裂以外の準備や成長などを行う期間",
    "option1": "G2期",
    "option2": "間期",
    "option3": "M期",
    "option4": "S期",
    "correctAnswerIndex": "間期"
  },
  {
    "id": 50,
    "subject": "生物基礎",
    "field": "遺伝子とそのはたらき",
    "unit": "遺伝情報とDNA",
    "questionText": "間期のうち、DNAの合成に向けて準備を行う期間",
    "option1": "M期",
    "option2": "G1期",
    "option3": "S期",
    "option4": "G2期",
    "correctAnswerIndex": "G1期"
  },
  {
    "id": 51,
    "subject": "生物基礎",
    "field": "遺伝子とそのはたらき",
    "unit": "遺伝情報とDNA",
    "questionText": "間期のうち、DNAが複製される期間",
    "option1": "G2期",
    "option2": "S期",
    "option3": "G1期",
    "option4": "M期",
    "correctAnswerIndex": "S期"
  },
  {
    "id": 52,
    "subject": "生物基礎",
    "field": "遺伝子とそのはたらき",
    "unit": "遺伝情報とDNA",
    "questionText": "間期のうち、分裂に向けた最終準備が行われる期間",
    "option1": "G1期",
    "option2": "G2期",
    "option3": "S期",
    "option4": "M期",
    "correctAnswerIndex": "G2期"
  },
  {
    "id": 53,
    "subject": "生物基礎",
    "field": "遺伝子とそのはたらき",
    "unit": "遺伝情報とDNA",
    "questionText": "細胞周期のうち、細胞が実際に分裂する期間",
    "option1": "S期",
    "option2": "M期",
    "option3": "間期",
    "option4": "G1期",
    "correctAnswerIndex": "M期"
  },
  {
    "id": 54,
    "subject": "生物基礎",
    "field": "遺伝子とそのはたらき",
    "unit": "遺伝情報とDNA",
    "questionText": "DNAの複製方法で、2本鎖の一方を鋳型として新しい鎖をつくる方式",
    "option1": "非保存的複製",
    "option2": "半保存的複製",
    "option3": "連続複製",
    "option4": "分散的複製",
    "correctAnswerIndex": "半保存的複製"
  },
  {
    "id": 55,
    "subject": "生物基礎",
    "field": "遺伝子とそのはたらき",
    "unit": "遺伝情報の発現",
    "questionText": "生命活動に必要な働きをする、高分子の生体物質を何というか？",
    "option1": "糖質",
    "option2": "タンパク質",
    "option3": "脂質",
    "option4": "核酸",
    "correctAnswerIndex": "タンパク質"
  },
  {
    "id": 56,
    "subject": "生物基礎",
    "field": "遺伝子とそのはたらき",
    "unit": "遺伝情報の発現",
    "questionText": "遺伝情報の伝達に関わり、DNAの情報を写し取る核酸は何か？",
    "option1": "tRNA",
    "option2": "mRNA",
    "option3": "DNAポリメラーゼ",
    "option4": "rRNA",
    "correctAnswerIndex": "mRNA"
  },
  {
    "id": 57,
    "subject": "生物基礎",
    "field": "遺伝子とそのはたらき",
    "unit": "遺伝情報の発現",
    "questionText": "RNAの構成成分で、五炭糖の一種は何か？",
    "option1": "グルコース",
    "option2": "リボース",
    "option3": "デオキシリボース",
    "option4": "フルクトース",
    "correctAnswerIndex": "リボース"
  },
  {
    "id": 58,
    "subject": "生物基礎",
    "field": "遺伝子とそのはたらき",
    "unit": "遺伝情報の発現",
    "questionText": "RNAの塩基で、チミンの代わりに存在するものは何か？",
    "option1": "グアニン",
    "option2": "ウラシル",
    "option3": "アデニン",
    "option4": "シトシン",
    "correctAnswerIndex": "ウラシル"
  },
  {
    "id": 59,
    "subject": "生物基礎",
    "field": "遺伝子とそのはたらき",
    "unit": "遺伝情報の発現",
    "questionText": "遺伝子の情報が形質として現れることを何というか？",
    "option1": "転写",
    "option2": "形質発現",
    "option3": "複製",
    "option4": "翻訳",
    "correctAnswerIndex": "形質発現"
  },
  {
    "id": 60,
    "subject": "生物基礎",
    "field": "遺伝子とそのはたらき",
    "unit": "遺伝情報の発現",
    "questionText": "DNAの情報をmRNAに写し取る過程を何というか？",
    "option1": "複製",
    "option2": "転写",
    "option3": "翻訳",
    "option4": "形質転換",
    "correctAnswerIndex": "転写"
  },
  {
    "id": 61,
    "subject": "生物基礎",
    "field": "遺伝子とそのはたらき",
    "unit": "遺伝情報の発現",
    "questionText": "mRNAの情報をもとにタンパク質を合成する過程を何というか？",
    "option1": "複製",
    "option2": "翻訳",
    "option3": "転写",
    "option4": "遺伝",
    "correctAnswerIndex": "翻訳"
  },
  {
    "id": 62,
    "subject": "生物基礎",
    "field": "遺伝子とそのはたらき",
    "unit": "遺伝情報の発現",
    "questionText": "遺伝情報を伝えるRNAの一種で、タンパク質合成の設計図となるものは何か？",
    "option1": "rRNA",
    "option2": "mRNA",
    "option3": "tRNA",
    "option4": "snRNA",
    "correctAnswerIndex": "mRNA"
  },
  {
    "id": 63,
    "subject": "生物基礎",
    "field": "遺伝子とそのはたらき",
    "unit": "遺伝情報の発現",
    "questionText": "3つの塩基で1つのアミノ酸を指定するRNAの塩基配列を何というか？",
    "option1": "遺伝子",
    "option2": "コドン",
    "option3": "アンチコドン",
    "option4": "プロモーター",
    "correctAnswerIndex": "コドン"
  },
  {
    "id": 64,
    "subject": "生物基礎",
    "field": "遺伝子とそのはたらき",
    "unit": "遺伝情報の発現",
    "questionText": "アミノ酸を運ぶRNAは何か？",
    "option1": "rRNA",
    "option2": "tRNA",
    "option3": "mRNA",
    "option4": "snRNA",
    "correctAnswerIndex": "tRNA"
  },
  {
    "id": 65,
    "subject": "生物基礎",
    "field": "遺伝子とそのはたらき",
    "unit": "遺伝情報の発現",
    "questionText": "tRNAにあり、mRNAのコドンと対応する3つの塩基を何というか？",
    "option1": "プロモーター",
    "option2": "アンチコドン",
    "option3": "コドン",
    "option4": "オペレーター",
    "correctAnswerIndex": "アンチコドン"
  },
  {
    "id": 66,
    "subject": "生物基礎",
    "field": "遺伝子とそのはたらき",
    "unit": "遺伝情報の発現",
    "questionText": "タンパク質合成の開始を指示するコドンは何か？",
    "option1": "ノンセンスコドン",
    "option2": "開始コドン",
    "option3": "終止コドン",
    "option4": "アンチコドン",
    "correctAnswerIndex": "開始コドン"
  },
  {
    "id": 67,
    "subject": "生物基礎",
    "field": "遺伝子とそのはたらき",
    "unit": "遺伝情報の発現",
    "questionText": "タンパク質合成の終了を指示するコドンは何か？",
    "option1": "センスコドン",
    "option2": "終止コドン",
    "option3": "開始コドン",
    "option4": "アンチコドン",
    "correctAnswerIndex": "終止コドン"
  },
  {
    "id": 68,
    "subject": "生物基礎",
    "field": "遺伝子とそのはたらき",
    "unit": "遺伝情報の発現",
    "questionText": "遺伝情報の流れをDNA→RNA→タンパク質で説明する考え方を何というか？",
    "option1": "シャルガフの法則",
    "option2": "セントラルドグマ",
    "option3": "半保存的複製",
    "option4": "遺伝子組換え",
    "correctAnswerIndex": "セントラルドグマ"
  },
  {
    "id": 69,
    "subject": "生物基礎",
    "field": "遺伝子とそのはたらき",
    "unit": "遺伝情報の発現",
    "questionText": "未分化の細胞が特定の形質を持つ細胞になることを何というか？",
    "option1": "成長",
    "option2": "分化",
    "option3": "増殖",
    "option4": "再生",
    "correctAnswerIndex": "分化"
  },
  {
    "id": 70,
    "subject": "生物基礎",
    "field": "遺伝子とそのはたらき",
    "unit": "遺伝情報の発現",
    "questionText": "細胞の核内にある、遺伝情報をもつ構造は何か？",
    "option1": "ミトコンドリア",
    "option2": "染色体",
    "option3": "細胞質",
    "option4": "リボソーム",
    "correctAnswerIndex": "染色体"
  },
  {
    "id": 71,
    "subject": "生物基礎",
    "field": "遺伝子とそのはたらき",
    "unit": "遺伝情報の発現",
    "questionText": "対をなす染色体で、同じ遺伝子座を持つものを何というか？",
    "option1": "姉妹染色分体",
    "option2": "相同染色体",
    "option3": "性染色体",
    "option4": "非相同染色体",
    "correctAnswerIndex": "相同染色体"
  },
  {
    "id": 72,
    "subject": "生物基礎",
    "field": "遺伝子とそのはたらき",
    "unit": "遺伝情報の発現",
    "questionText": "ある生物の全遺伝情報のセットを何というか？",
    "option1": "染色体",
    "option2": "ゲノム",
    "option3": "遺伝子",
    "option4": "DNA",
    "correctAnswerIndex": "ゲノム"
  },
  {
    "id": 73,
    "subject": "生物基礎",
    "field": "ヒトの体内環境の維持",
    "unit": "体内での情報伝達と調節",
    "questionText": "身体の情報伝達を担う器官系は何か？",
    "option1": "消化器系",
    "option2": "神経系",
    "option3": "循環器系",
    "option4": "内分泌系",
    "correctAnswerIndex": "神経系"
  },
  {
    "id": 74,
    "subject": "生物基礎",
    "field": "ヒトの体内環境の維持",
    "unit": "体内での情報伝達と調節",
    "questionText": "脳と脊髄からなる神経系は何か？",
    "option1": "自律神経系",
    "option2": "中枢神経系",
    "option3": "末梢神経系",
    "option4": "体性神経系",
    "correctAnswerIndex": "中枢神経系"
  },
  {
    "id": 75,
    "subject": "生物基礎",
    "field": "ヒトの体内環境の維持",
    "unit": "体内での情報伝達と調節",
    "questionText": "中枢神経系から枝分かれし、身体の各部分とつながる神経系は何か？",
    "option1": "自律神経系",
    "option2": "末梢神経系",
    "option3": "中枢神経系",
    "option4": "運動神経系",
    "correctAnswerIndex": "末梢神経系"
  },
  {
    "id": 76,
    "subject": "生物基礎",
    "field": "ヒトの体内環境の維持",
    "unit": "体内での情報伝達と調節",
    "questionText": "自分の意思に関係なく内臓の働きを調節する神経系は何か？",
    "option1": "運動神経系",
    "option2": "自律神経系",
    "option3": "体性神経系",
    "option4": "知覚神経系",
    "correctAnswerIndex": "自律神経系"
  },
  {
    "id": 77,
    "subject": "生物基礎",
    "field": "ヒトの体内環境の維持",
    "unit": "体内での情報伝達と調節",
    "questionText": "自律神経系のうち、身体活動を活発にする神経は何か？",
    "option1": "中枢神経",
    "option2": "交感神経",
    "option3": "副交感神経",
    "option4": "末梢神経",
    "correctAnswerIndex": "交感神経"
  },
  {
    "id": 78,
    "subject": "生物基礎",
    "field": "ヒトの体内環境の維持",
    "unit": "体内での情報伝達と調節",
    "questionText": "自律神経系のうち、身体を休息モードにする神経は何か？",
    "option1": "中枢神経",
    "option2": "副交感神経",
    "option3": "交感神経",
    "option4": "末梢神経",
    "correctAnswerIndex": "副交感神経"
  },
  {
    "id": 79,
    "subject": "生物基礎",
    "field": "ヒトの体内環境の維持",
    "unit": "体内での情報伝達と調節",
    "questionText": "神経系の基本単位となる細胞は何か？",
    "option1": "筋細胞",
    "option2": "ニューロン",
    "option3": "グリア細胞",
    "option4": "上皮細胞",
    "correctAnswerIndex": "ニューロン"
  },
  {
    "id": 80,
    "subject": "生物基礎",
    "field": "ヒトの体内環境の維持",
    "unit": "体内での情報伝達と調節",
    "questionText": "間脳はどのような働きをするか？",
    "option1": "運動の制御",
    "option2": "体温や摂食などの調節",
    "option3": "思考と記憶",
    "option4": "感覚情報の統合",
    "correctAnswerIndex": "体温や摂食などの調節"
  },
  {
    "id": 81,
    "subject": "生物基礎",
    "field": "ヒトの体内環境の維持",
    "unit": "体内での情報伝達と調節",
    "questionText": "間脳にある、体温や摂食などを調節する部分は何か？",
    "option1": "大脳基底核",
    "option2": "視床下部",
    "option3": "視床",
    "option4": "小脳",
    "correctAnswerIndex": "視床下部"
  },
  {
    "id": 82,
    "subject": "生物基礎",
    "field": "ヒトの体内環境の維持",
    "unit": "体内での情報伝達と調節",
    "questionText": "生命維持のために脳の機能が停止した状態を何というか？",
    "option1": "仮死状態",
    "option2": "脳死",
    "option3": "昏睡",
    "option4": "意識不明",
    "correctAnswerIndex": "脳死"
  },
  {
    "id": 83,
    "subject": "生物基礎",
    "field": "ヒトの体内環境の維持",
    "unit": "体内での情報伝達と調節",
    "questionText": "心臓の拍動のリズムをつくる特殊な心筋組織は何か？",
    "option1": "心房",
    "option2": "洞房結節",
    "option3": "心室",
    "option4": "プルキンエ線維",
    "correctAnswerIndex": "洞房結節"
  },
  {
    "id": 84,
    "subject": "生物基礎",
    "field": "ヒトの体内環境の維持",
    "unit": "体内での情報伝達と調節",
    "questionText": "ホルモンを分泌して身体のさまざまな働きを調節する器官系を何というか？",
    "option1": "神経系",
    "option2": "内分泌系",
    "option3": "消化器系",
    "option4": "循環器系",
    "correctAnswerIndex": "内分泌系"
  },
  {
    "id": 85,
    "subject": "生物基礎",
    "field": "ヒトの体内環境の維持",
    "unit": "体内での情報伝達と調節",
    "questionText": "生体内で情報を伝達し、標的器官の機能を調節する化学物質は何か？",
    "option1": "ビタミン",
    "option2": "ホルモン",
    "option3": "酵素",
    "option4": "抗体",
    "correctAnswerIndex": "ホルモン"
  },
  {
    "id": 86,
    "subject": "生物基礎",
    "field": "ヒトの体内環境の維持",
    "unit": "体内での情報伝達と調節",
    "questionText": "ホルモンが作用する、調節対象となる器官を何というか？",
    "option1": "生産器官",
    "option2": "標的器官",
    "option3": "分泌腺",
    "option4": "制御器官",
    "correctAnswerIndex": "標的器官"
  },
  {
    "id": 87,
    "subject": "生物基礎",
    "field": "ヒトの体内環境の維持",
    "unit": "体内での情報伝達と調節",
    "questionText": "ホルモンが作用する、標的器官内の特定の細胞を何というか？",
    "option1": "生成細胞",
    "option2": "標的細胞",
    "option3": "受容体細胞",
    "option4": "伝達細胞",
    "correctAnswerIndex": "標的細胞"
  },
  {
    "id": 88,
    "subject": "生物基礎",
    "field": "ヒトの体内環境の維持",
    "unit": "体内での情報伝達と調節",
    "questionText": "ホルモンが標的細胞に結合するためのタンパク質を何というか？",
    "option1": "抗体",
    "option2": "受容体",
    "option3": "酵素",
    "option4": "チャネル",
    "correctAnswerIndex": "受容体"
  },
  {
    "id": 89,
    "subject": "生物基礎",
    "field": "ヒトの体内環境の維持",
    "unit": "体内での情報伝達と調節",
    "questionText": "脳の下部にあり、多くのホルモン分泌を制御する内分泌腺は何か？",
    "option1": "副腎",
    "option2": "脳下垂体",
    "option3": "甲状腺",
    "option4": "膵臓",
    "correctAnswerIndex": "脳下垂体"
  },
  {
    "id": 90,
    "subject": "生物基礎",
    "field": "ヒトの体内環境の維持",
    "unit": "体内での情報伝達と調節",
    "questionText": "ホルモンの分泌量を調節し、過剰を防ぐ調節機構を何というか？",
    "option1": "増幅機構",
    "option2": "負のフィードバック",
    "option3": "正のフィードバック",
    "option4": "抑制反応",
    "correctAnswerIndex": "負のフィードバック"
  },
  {
    "id": 91,
    "subject": "生物基礎",
    "field": "ヒトの体内環境の維持",
    "unit": "体内環境の維持のしくみ",
    "questionText": "血管や細胞間を流れる液体で、栄養や老廃物を運ぶものは何か？",
    "option1": "組織液",
    "option2": "体液",
    "option3": "リンパ液",
    "option4": "細胞質",
    "correctAnswerIndex": "体液"
  },
  {
    "id": 92,
    "subject": "生物基礎",
    "field": "ヒトの体内環境の維持",
    "unit": "体内環境の維持のしくみ",
    "questionText": "細胞と血液の間を満たし、物質交換を助ける液体を何というか？",
    "option1": "リンパ液",
    "option2": "組織液",
    "option3": "血液",
    "option4": "細胞内液",
    "correctAnswerIndex": "組織液"
  },
  {
    "id": 93,
    "subject": "生物基礎",
    "field": "ヒトの体内環境の維持",
    "unit": "体内環境の維持のしくみ",
    "questionText": "血液中の液体成分で、血球を浮かべている部分は何か？",
    "option1": "赤血球",
    "option2": "血しょう",
    "option3": "血小板",
    "option4": "白血球",
    "correctAnswerIndex": "血しょう"
  },
  {
    "id": 94,
    "subject": "生物基礎",
    "field": "ヒトの体内環境の維持",
    "unit": "体内環境の維持のしくみ",
    "questionText": "酸素を運ぶために赤血球に含まれるタンパク質は何か？",
    "option1": "アルブミン",
    "option2": "ヘモグロビン",
    "option3": "ミオグロビン",
    "option4": "フィブリノーゲン",
    "correctAnswerIndex": "ヘモグロビン"
  },
  {
    "id": 95,
    "subject": "生物基礎",
    "field": "ヒトの体内環境の維持",
    "unit": "体内環境の維持のしくみ",
    "questionText": "血液中の酸素を運ぶ細胞を何というか？",
    "option1": "血小板",
    "option2": "赤血球",
    "option3": "白血球",
    "option4": "リンパ球",
    "correctAnswerIndex": "赤血球"
  },
  {
    "id": 96,
    "subject": "生物基礎",
    "field": "ヒトの体内環境の維持",
    "unit": "体内環境の維持のしくみ",
    "questionText": "感染防御に働く血液中の細胞は何か？",
    "option1": "血小板",
    "option2": "白血球",
    "option3": "赤血球",
    "option4": "血漿",
    "correctAnswerIndex": "白血球"
  },
  {
    "id": 97,
    "subject": "生物基礎",
    "field": "ヒトの体内環境の維持",
    "unit": "体内環境の維持のしくみ",
    "questionText": "血液の凝固に関与し、出血を止める小さな細胞断片は何か？",
    "option1": "白血球",
    "option2": "血小板",
    "option3": "赤血球",
    "option4": "リンパ球",
    "correctAnswerIndex": "血小板"
  },
  {
    "id": 98,
    "subject": "生物基礎",
    "field": "ヒトの体内環境の維持",
    "unit": "体内環境の維持のしくみ",
    "questionText": "リンパ液中の免疫に関与する白血球を何というか？",
    "option1": "マクロファージ",
    "option2": "リンパ球",
    "option3": "好中球",
    "option4": "単球",
    "correctAnswerIndex": "リンパ球"
  },
  {
    "id": 99,
    "subject": "生物基礎",
    "field": "ヒトの体内環境の維持",
    "unit": "体内環境の維持のしくみ",
    "questionText": "生体の内部環境を一定に保つ仕組みを何というか？",
    "option1": "代謝",
    "option2": "恒常性（ホメオスタシス）",
    "option3": "適応",
    "option4": "オートファジー",
    "correctAnswerIndex": "恒常性（ホメオスタシス）"
  },
  {
    "id": 100,
    "subject": "生物基礎",
    "field": "ヒトの体内環境の維持",
    "unit": "体内環境の維持のしくみ",
    "questionText": "血液中のブドウ糖の濃度を何というか？",
    "option1": "インスリン値",
    "option2": "グルカゴン値",
    "option3": "血糖値",
    "option4": "グリコーゲン値",
    "correctAnswerIndex": "血糖値"
  },
  {
    "id": 101,
    "subject": "生物基礎",
    "field": "ヒトの体内環境の維持",
    "unit": "体内環境の維持のしくみ",
    "questionText": "血液中に存在し、エネルギー源となる単糖類は何か？",
    "option1": "フルクトース",
    "option2": "グルコース",
    "option3": "ガラクトース",
    "option4": "スクロース",
    "correctAnswerIndex": "グルコース"
  },
  {
    "id": 102,
    "subject": "生物基礎",
    "field": "ヒトの体内環境の維持",
    "unit": "体内環境の維持のしくみ",
    "questionText": "グルコースが肝臓や筋肉に蓄えられた多糖類は何か？",
    "option1": "セルロース",
    "option2": "グリコーゲン",
    "option3": "デンプン",
    "option4": "ショ糖",
    "correctAnswerIndex": "グリコーゲン"
  },
  {
    "id": 103,
    "subject": "生物基礎",
    "field": "ヒトの体内環境の維持",
    "unit": "体内環境の維持のしくみ",
    "questionText": "血糖値の調節に重要な臓器は何か？",
    "option1": "腎臓",
    "option2": "肝臓",
    "option3": "胃",
    "option4": "脾臓",
    "correctAnswerIndex": "肝臓"
  },
  {
    "id": 104,
    "subject": "生物基礎",
    "field": "ヒトの体内環境の維持",
    "unit": "体内環境の維持のしくみ",
    "questionText": "インスリンとグルカゴンを分泌する臓器は何か？",
    "option1": "甲状腺",
    "option2": "すい臓",
    "option3": "肝臓",
    "option4": "副腎",
    "correctAnswerIndex": "すい臓"
  },
  {
    "id": 105,
    "subject": "生物基礎",
    "field": "ヒトの体内環境の維持",
    "unit": "体内環境の維持のしくみ",
    "questionText": "すい臓にある、グルカゴンを分泌する細胞は何か？",
    "option1": "B細胞",
    "option2": "D細胞",
    "option3": "A細胞",
    "option4": "C細胞",
    "correctAnswerIndex": "A細胞"
  },
  {
    "id": 106,
    "subject": "生物基礎",
    "field": "ヒトの体内環境の維持",
    "unit": "体内環境の維持のしくみ",
    "questionText": "すい臓にある、インスリンを分泌する細胞は何か？",
    "option1": "B細胞",
    "option2": "D細胞",
    "option3": "A細胞",
    "option4": "C細胞",
    "correctAnswerIndex": "B細胞"
  },
  {
    "id": 107,
    "subject": "生物基礎",
    "field": "ヒトの体内環境の維持",
    "unit": "体内環境の維持のしくみ",
    "questionText": "血糖値を下げるホルモンは何か？",
    "option1": "アドレナリン",
    "option2": "インスリン",
    "option3": "グルカゴン",
    "option4": "コルチゾール",
    "correctAnswerIndex": "インスリン"
  },
  {
    "id": 108,
    "subject": "生物基礎",
    "field": "ヒトの体内環境の維持",
    "unit": "体内環境の維持のしくみ",
    "questionText": "血糖値を上げるホルモンは何か？",
    "option1": "セクレチン",
    "option2": "グルカゴン",
    "option3": "インスリン",
    "option4": "ガストリン",
    "correctAnswerIndex": "グルカゴン"
  },
  {
    "id": 109,
    "subject": "生物基礎",
    "field": "ヒトの体内環境の維持",
    "unit": "体内環境の維持のしくみ",
    "questionText": "副腎の外側にある皮質部分は何か？",
    "option1": "甲状腺",
    "option2": "副腎皮質",
    "option3": "副腎髄質",
    "option4": "下垂体",
    "correctAnswerIndex": "副腎皮質"
  },
  {
    "id": 110,
    "subject": "生物基礎",
    "field": "ヒトの体内環境の維持",
    "unit": "体内環境の維持のしくみ",
    "questionText": "副腎の内側にある髄質部分は何か？",
    "option1": "甲状腺",
    "option2": "副腎髄質",
    "option3": "副腎皮質",
    "option4": "下垂体",
    "correctAnswerIndex": "副腎髄質"
  },
  {
    "id": 111,
    "subject": "生物基礎",
    "field": "ヒトの体内環境の維持",
    "unit": "体内環境の維持のしくみ",
    "questionText": "副腎皮質から分泌され、糖代謝に関わるホルモンは何か？",
    "option1": "アドレナリン",
    "option2": "糖質コルチコイド",
    "option3": "アセチルコリン",
    "option4": "ノルアドレナリン",
    "correctAnswerIndex": "糖質コルチコイド"
  },
  {
    "id": 112,
    "subject": "生物基礎",
    "field": "ヒトの体内環境の維持",
    "unit": "体内環境の維持のしくみ",
    "questionText": "副腎皮質から分泌され、塩分・水分の調節に関わるホルモンは何か？",
    "option1": "アドレナリン",
    "option2": "鉱質コルチコイド",
    "option3": "アセチルコリン",
    "option4": "ノルアドレナリン",
    "correctAnswerIndex": "鉱質コルチコイド"
  },
  {
    "id": 113,
    "subject": "生物基礎",
    "field": "ヒトの体内環境の維持",
    "unit": "体内環境の維持のしくみ",
    "questionText": "副腎髄質から分泌され、緊急時に作用するホルモンは何か？",
    "option1": "アルドステロン",
    "option2": "アドレナリン",
    "option3": "グルカゴン",
    "option4": "インスリン",
    "correctAnswerIndex": "アドレナリン"
  },
  {
    "id": 114,
    "subject": "生物基礎",
    "field": "ヒトの体内環境の維持",
    "unit": "体内環境の維持のしくみ",
    "questionText": "血糖値の調節がうまくいかず、高血糖が続く病気は何か？",
    "option1": "脂質異常症",
    "option2": "糖尿病",
    "option3": "高血圧",
    "option4": "心筋梗塞",
    "correctAnswerIndex": "糖尿病"
  },
  {
    "id": 115,
    "subject": "生物基礎",
    "field": "ヒトの体内環境の維持",
    "unit": "体内環境の維持のしくみ",
    "questionText": "血液が固まる過程を何というか？",
    "option1": "凝集",
    "option2": "血液凝固",
    "option3": "溶血",
    "option4": "溶解",
    "correctAnswerIndex": "血液凝固"
  },
  {
    "id": 116,
    "subject": "生物基礎",
    "field": "ヒトの体内環境の維持",
    "unit": "体内環境の維持のしくみ",
    "questionText": "血液凝固の最後に形成される不溶性のタンパク質は何か？",
    "option1": "トロンビン",
    "option2": "フィブリン",
    "option3": "フィブリノーゲン",
    "option4": "プラスミン",
    "correctAnswerIndex": "フィブリン"
  },
  {
    "id": 117,
    "subject": "生物基礎",
    "field": "ヒトの体内環境の維持",
    "unit": "体内環境の維持のしくみ",
    "questionText": "血液凝固によってできる血の塊を何というか？",
    "option1": "血塊",
    "option2": "血ぺい",
    "option3": "塞栓",
    "option4": "凝固血液",
    "correctAnswerIndex": "血ぺい"
  },
  {
    "id": 118,
    "subject": "生物基礎",
    "field": "ヒトの体内環境の維持",
    "unit": "体内環境の維持のしくみ",
    "questionText": "血液凝固でできた血ぺいを溶かす仕組みを何というか？",
    "option1": "抗凝固",
    "option2": "線溶",
    "option3": "凝固促進",
    "option4": "血小板凝集",
    "correctAnswerIndex": "線溶"
  },
  {
    "id": 119,
    "subject": "生物基礎",
    "field": "ヒトの体内環境の維持",
    "unit": "免疫のはたらき",
    "questionText": "病原体などに対して体を守る仕組みを何というか？",
    "option1": "アレルギー",
    "option2": "免疫",
    "option3": "炎症",
    "option4": "恒常性",
    "correctAnswerIndex": "免疫"
  },
  {
    "id": 120,
    "subject": "生物基礎",
    "field": "ヒトの体内環境の維持",
    "unit": "免疫のはたらき",
    "questionText": "生まれつき備わっている、非特異的な免疫のことを何というか？",
    "option1": "細胞性免疫",
    "option2": "自然免疫",
    "option3": "獲得免疫",
    "option4": "液性免疫",
    "correctAnswerIndex": "自然免疫"
  },
  {
    "id": 121,
    "subject": "生物基礎",
    "field": "ヒトの体内環境の維持",
    "unit": "免疫のはたらき",
    "questionText": "病原体の侵入を防ぐ皮膚や粘膜などの仕組みを何というか？",
    "option1": "液性免疫",
    "option2": "物理的・化学的防御",
    "option3": "細胞性免疫",
    "option4": "獲得免疫",
    "correctAnswerIndex": "物理的・化学的防御"
  },
  {
    "id": 122,
    "subject": "生物基礎",
    "field": "ヒトの体内環境の維持",
    "unit": "免疫のはたらき",
    "questionText": "異物を取り込み、消化する免疫細胞の働きを何というか？",
    "option1": "細胞性免疫",
    "option2": "食作用",
    "option3": "抗体産生",
    "option4": "情報伝達",
    "correctAnswerIndex": "食作用"
  },
  {
    "id": 123,
    "subject": "生物基礎",
    "field": "ヒトの体内環境の維持",
    "unit": "免疫のはたらき",
    "questionText": "自然免疫で最初に働く白血球の一種は何か？",
    "option1": "好酸球",
    "option2": "好中球",
    "option3": "リンパ球",
    "option4": "マクロファージ",
    "correctAnswerIndex": "好中球"
  },
  {
    "id": 124,
    "subject": "生物基礎",
    "field": "ヒトの体内環境の維持",
    "unit": "免疫のはたらき",
    "questionText": "異物を食作用で処理し、抗原提示も行う免疫細胞は何か？",
    "option1": "好塩基球",
    "option2": "マクロファージ",
    "option3": "好中球",
    "option4": "形質細胞",
    "correctAnswerIndex": "マクロファージ"
  },
  {
    "id": 125,
    "subject": "生物基礎",
    "field": "ヒトの体内環境の維持",
    "unit": "免疫のはたらき",
    "questionText": "抗原を取り込み、T細胞に提示する免疫細胞は何か？",
    "option1": "キラーT細胞",
    "option2": "樹状細胞",
    "option3": "NK細胞",
    "option4": "B細胞",
    "correctAnswerIndex": "樹状細胞"
  },
  {
    "id": 126,
    "subject": "生物基礎",
    "field": "ヒトの体内環境の維持",
    "unit": "免疫のはたらき",
    "questionText": "異物の侵入により、発赤や腫れなどの反応が起こることを何というか？",
    "option1": "アレルギー",
    "option2": "炎症",
    "option3": "免疫寛容",
    "option4": "自己免疫",
    "correctAnswerIndex": "炎症"
  },
  {
    "id": 127,
    "subject": "生物基礎",
    "field": "ヒトの体内環境の維持",
    "unit": "免疫のはたらき",
    "questionText": "後天的に獲得され、特定の異物に反応する免疫の仕組みを何というか？",
    "option1": "物理的防御",
    "option2": "獲得免疫",
    "option3": "自然免疫",
    "option4": "食作用",
    "correctAnswerIndex": "獲得免疫"
  },
  {
    "id": 128,
    "subject": "生物基礎",
    "field": "ヒトの体内環境の維持",
    "unit": "免疫のはたらき",
    "questionText": "免疫に関わる白血球の一群で、特異的な反応を示す細胞を何というか？",
    "option1": "マクロファージ",
    "option2": "リンパ球",
    "option3": "好中球",
    "option4": "単球",
    "correctAnswerIndex": "リンパ球"
  },
  {
    "id": 129,
    "subject": "生物基礎",
    "field": "ヒトの体内環境の維持",
    "unit": "免疫のはたらき",
    "questionText": "抗原提示を受けて免疫応答を促すT細胞は何か？",
    "option1": "サプレッサーT細胞",
    "option2": "ヘルパーT細胞",
    "option3": "キラーT細胞",
    "option4": "NK細胞",
    "correctAnswerIndex": "ヘルパーT細胞"
  },
  {
    "id": 130,
    "subject": "生物基礎",
    "field": "ヒトの体内環境の維持",
    "unit": "免疫のはたらき",
    "questionText": "感染した細胞を直接攻撃するT細胞は何か？",
    "option1": "サプレッサーT細胞",
    "option2": "キラーT細胞",
    "option3": "ヘルパーT細胞",
    "option4": "B細胞",
    "correctAnswerIndex": "キラーT細胞"
  },
  {
    "id": 131,
    "subject": "生物基礎",
    "field": "ヒトの体内環境の維持",
    "unit": "免疫のはたらき",
    "questionText": "抗体を産生するリンパ球の一種は何か？",
    "option1": "NK細胞",
    "option2": "B細胞",
    "option3": "T細胞",
    "option4": "マクロファージ",
    "correctAnswerIndex": "B細胞"
  },
  {
    "id": 132,
    "subject": "生物基礎",
    "field": "ヒトの体内環境の維持",
    "unit": "免疫のはたらき",
    "questionText": "がん細胞やウイルス感染細胞を非特異的に攻撃するリンパ球は何か？",
    "option1": "ヘルパーT細胞",
    "option2": "NK細胞",
    "option3": "B細胞",
    "option4": "キラーT細胞",
    "correctAnswerIndex": "NK細胞"
  },
  {
    "id": 133,
    "subject": "生物基礎",
    "field": "ヒトの体内環境の維持",
    "unit": "免疫のはたらき",
    "questionText": "免疫系が異物と認識する分子を何というか？",
    "option1": "抗原抗体複合体",
    "option2": "抗原",
    "option3": "抗体",
    "option4": "免疫グロブリン",
    "correctAnswerIndex": "抗原"
  },
  {
    "id": 134,
    "subject": "生物基礎",
    "field": "ヒトの体内環境の維持",
    "unit": "免疫のはたらき",
    "questionText": "抗原を取り込み、リンパ球に提示することを何というか？",
    "option1": "抗体産生",
    "option2": "抗原提示",
    "option3": "免疫応答",
    "option4": "細胞性免疫",
    "correctAnswerIndex": "抗原提示"
  },
  {
    "id": 135,
    "subject": "生物基礎",
    "field": "ヒトの体内環境の維持",
    "unit": "免疫のはたらき",
    "questionText": "B細胞が抗体を産生し、病原体を中和する免疫反応は何か？",
    "option1": "アレルギー反応",
    "option2": "液性免疫",
    "option3": "細胞性免疫",
    "option4": "自己免疫反応",
    "correctAnswerIndex": "体液性免疫"
  },
  {
    "id": 136,
    "subject": "生物基礎",
    "field": "ヒトの体内環境の維持",
    "unit": "免疫のはたらき",
    "questionText": "B細胞が分化し、抗体を産生する細胞は何か？",
    "option1": "ヘルパーT細胞",
    "option2": "形質細胞",
    "option3": "メモリーB細胞",
    "option4": "NK細胞",
    "correctAnswerIndex": "形質細胞"
  },
  {
    "id": 137,
    "subject": "生物基礎",
    "field": "ヒトの体内環境の維持",
    "unit": "免疫のはたらき",
    "questionText": "抗原に特異的に結合し、無力化するタンパク質は何か？",
    "option1": "ホルモン",
    "option2": "抗体",
    "option3": "酵素",
    "option4": "受容体",
    "correctAnswerIndex": "抗体"
  },
  {
    "id": 138,
    "subject": "生物基礎",
    "field": "ヒトの体内環境の維持",
    "unit": "免疫のはたらき",
    "questionText": "抗体の本体であるタンパク質の総称は何か？",
    "option1": "レセプター",
    "option2": "免疫グロブリン",
    "option3": "サイトカイン",
    "option4": "リゾチーム",
    "correctAnswerIndex": "免疫グロブリン"
  },
  {
    "id": 139,
    "subject": "生物基礎",
    "field": "ヒトの体内環境の維持",
    "unit": "免疫のはたらき",
    "questionText": "抗体と抗原が特異的に結合する反応を何というか？",
    "option1": "沈降反応",
    "option2": "抗原抗体反応",
    "option3": "凝集反応",
    "option4": "中和反応",
    "correctAnswerIndex": "抗原抗体反応"
  },
  {
    "id": 140,
    "subject": "生物基礎",
    "field": "ヒトの体内環境の維持",
    "unit": "免疫のはたらき",
    "questionText": "T細胞が感染細胞などを直接排除する免疫反応を何というか？",
    "option1": "アレルギー反応",
    "option2": "細胞性免疫",
    "option3": "液性免疫",
    "option4": "自己免疫反応",
    "correctAnswerIndex": "細胞性免疫"
  },
  {
    "id": 141,
    "subject": "生物基礎",
    "field": "ヒトの体内環境の維持",
    "unit": "免疫のはたらき",
    "questionText": "同じ抗原に対して強く反応できるようになる免疫の性質は何か？",
    "option1": "自己免疫",
    "option2": "免疫記憶",
    "option3": "免疫寛容",
    "option4": "アレルギー",
    "correctAnswerIndex": "免疫記憶"
  },
  {
    "id": 142,
    "subject": "生物基礎",
    "field": "ヒトの体内環境の維持",
    "unit": "免疫のはたらき",
    "questionText": "初めて抗原が体内に入った際の免疫反応を何というか？",
    "option1": "記憶応答",
    "option2": "一次応答",
    "option3": "二次応答",
    "option4": "アレルギー反応",
    "correctAnswerIndex": "一次応答"
  },
  {
    "id": 143,
    "subject": "生物基礎",
    "field": "ヒトの体内環境の維持",
    "unit": "免疫のはたらき",
    "questionText": "同じ抗原が再び入った際に起こる強い免疫反応を何というか？",
    "option1": "初回応答",
    "option2": "二次応答",
    "option3": "一次応答",
    "option4": "非特異的応答",
    "correctAnswerIndex": "二次応答"
  },
  {
    "id": 144,
    "subject": "生物基礎",
    "field": "ヒトの体内環境の維持",
    "unit": "免疫のはたらき",
    "questionText": "自己の成分に対して免疫が反応しない性質を何というか？",
    "option1": "自己免疫",
    "option2": "免疫寛容",
    "option3": "アレルギー",
    "option4": "免疫不全",
    "correctAnswerIndex": "免疫寛容"
  },
  {
    "id": 145,
    "subject": "生物基礎",
    "field": "ヒトの体内環境の維持",
    "unit": "免疫のはたらき",
    "questionText": "健康な人には害がない病原体が、免疫低下時に感染することを何というか？",
    "option1": "急性感染",
    "option2": "潜伏感染",
    "option3": "日和見感染",
    "option4": "慢性感染",
    "correctAnswerIndex": "日和見感染"
  },
  {
    "id": 146,
    "subject": "生物基礎",
    "field": "ヒトの体内環境の維持",
    "unit": "免疫のはたらき",
    "questionText": "HIVウイルスにより免疫機能が著しく低下する病気は何か？",
    "option1": "結核",
    "option2": "エイズ",
    "option3": "肝炎",
    "option4": "インフルエンザ",
    "correctAnswerIndex": "エイズ"
  },
  {
    "id": 147,
    "subject": "生物基礎",
    "field": "ヒトの体内環境の維持",
    "unit": "免疫のはたらき",
    "questionText": "エイズの原因となるウイルスは何か？",
    "option1": "麻疹ウイルス",
    "option2": "HIV",
    "option3": "インフルエンザウイルス",
    "option4": "B型肝炎ウイルス",
    "correctAnswerIndex": "HIV"
  },
  {
    "id": 148,
    "subject": "生物基礎",
    "field": "ヒトの体内環境の維持",
    "unit": "免疫のはたらき",
    "questionText": "本来無害な物質に対して過敏に免疫が反応する状態を何というか？",
    "option1": "免疫不全",
    "option2": "アレルギー",
    "option3": "自己免疫疾患",
    "option4": "炎症",
    "correctAnswerIndex": "アレルギー"
  },
  {
    "id": 149,
    "subject": "生物基礎",
    "field": "ヒトの体内環境の維持",
    "unit": "免疫のはたらき",
    "questionText": "アレルギー反応の原因となる抗原を何というか？",
    "option1": "毒素",
    "option2": "アレルゲン",
    "option3": "病原体",
    "option4": "自己抗原",
    "correctAnswerIndex": "アレルゲン"
  },
  {
    "id": 150,
    "subject": "生物基礎",
    "field": "ヒトの体内環境の維持",
    "unit": "免疫のはたらき",
    "questionText": "アレルギー反応が全身に急激に起こる重篤な状態を何というか？",
    "option1": "喘息発作",
    "option2": "アナフィラキシー",
    "option3": "蕁麻疹",
    "option4": "アレルギー性鼻炎",
    "correctAnswerIndex": "アナフィラキシー"
  },
  {
    "id": 151,
    "subject": "生物基礎",
    "field": "ヒトの体内環境の維持",
    "unit": "免疫のはたらき",
    "questionText": "自己の正常な細胞に対して免疫が反応する病気を何というか？",
    "option1": "アレルギー疾患",
    "option2": "自己免疫疾患",
    "option3": "感染症",
    "option4": "免疫不全",
    "correctAnswerIndex": "自己免疫疾患"
  },
  {
    "id": 152,
    "subject": "生物基礎",
    "field": "ヒトの体内環境の維持",
    "unit": "免疫のはたらき",
    "questionText": "病原体に対する免疫をつけるために行う注射を何というか？",
    "option1": "注射",
    "option2": "予防接種",
    "option3": "点滴",
    "option4": "輸血",
    "correctAnswerIndex": "予防接種"
  },
  {
    "id": 153,
    "subject": "生物基礎",
    "field": "ヒトの体内環境の維持",
    "unit": "免疫のはたらき",
    "questionText": "免疫をつけるために接種される、無毒化または弱毒化された病原体を何というか？",
    "option1": "抗体",
    "option2": "ワクチン",
    "option3": "抗生物質",
    "option4": "血清",
    "correctAnswerIndex": "ワクチン"
  },
  {
    "id": 154,
    "subject": "生物基礎",
    "field": "ヒトの体内環境の維持",
    "unit": "免疫のはたらき",
    "questionText": "他の動物に作らせた抗体を注射し、病気の治療に用いる方法を何というか？",
    "option1": "ワクチン接種",
    "option2": "血清療法",
    "option3": "予防接種",
    "option4": "化学療法",
    "correctAnswerIndex": "血清療法"
  },
  {
    "id": 155,
    "subject": "生物基礎",
    "field": "生物の多様性と生態系",
    "unit": "植生と遷移・バイオーム",
    "questionText": "ある地域に生育する植物全体のまとまりに該当する用語はどれか？",
    "option1": "草原",
    "option2": "山地帯",
    "option3": "森林限界",
    "option4": "植生",
    "correctAnswerIndex": "植生"
  },
  {
    "id": 156,
    "subject": "生物基礎",
    "field": "生物の多様性と生態系",
    "unit": "植生と遷移・バイオーム",
    "questionText": "植生の中で最も広く繁茂している種に該当する用語はどれか？",
    "option1": "階層構造",
    "option2": "針葉樹林",
    "option3": "陰樹",
    "option4": "優占種",
    "correctAnswerIndex": "優占種"
  },
  {
    "id": 157,
    "subject": "生物基礎",
    "field": "生物の多様性と生態系",
    "unit": "植生と遷移・バイオーム",
    "questionText": "植生を外見的に見たときの特徴に該当する用語はどれか？",
    "option1": "ギャップ",
    "option2": "照葉樹林",
    "option3": "高木層",
    "option4": "相観",
    "correctAnswerIndex": "相観"
  },
  {
    "id": 158,
    "subject": "生物基礎",
    "field": "生物の多様性と生態系",
    "unit": "植生と遷移・バイオーム",
    "questionText": "木本植物が密生している植生に該当する用語はどれか？",
    "option1": "サバンナ",
    "option2": "ステップ",
    "option3": "草本層",
    "option4": "森林",
    "correctAnswerIndex": "森林"
  },
  {
    "id": 159,
    "subject": "生物基礎",
    "field": "生物の多様性と生態系",
    "unit": "植生と遷移・バイオーム",
    "questionText": "森林の上層部で樹木の枝葉が覆っている部分に該当する用語はどれか？",
    "option1": "砂漠",
    "option2": "遷移",
    "option3": "林床",
    "option4": "林冠",
    "correctAnswerIndex": "林冠"
  },
  {
    "id": 160,
    "subject": "生物基礎",
    "field": "生物の多様性と生態系",
    "unit": "植生と遷移・バイオーム",
    "questionText": "森林内で林冠の下にある地表近くの部分に該当する用語はどれか？",
    "option1": "草原",
    "option2": "雨緑樹林",
    "option3": "地表層",
    "option4": "林床",
    "correctAnswerIndex": "林床"
  },
  {
    "id": 161,
    "subject": "生物基礎",
    "field": "生物の多様性と生態系",
    "unit": "植生と遷移・バイオーム",
    "questionText": "強い光の下でよく生育する植物に該当する用語はどれか？",
    "option1": "針葉樹林",
    "option2": "森林限界",
    "option3": "陰生植物",
    "option4": "陽生植物",
    "correctAnswerIndex": "陽生植物"
  },
  {
    "id": 162,
    "subject": "生物基礎",
    "field": "生物の多様性と生態系",
    "unit": "植生と遷移・バイオーム",
    "questionText": "弱い光でも育つことができる植物に該当する用語はどれか？",
    "option1": "ギャップ",
    "option2": "荒原",
    "option3": "陽樹",
    "option4": "陰生植物",
    "correctAnswerIndex": "陰生植物"
  },
  {
    "id": 163,
    "subject": "生物基礎",
    "field": "生物の多様性と生態系",
    "unit": "植生と遷移・バイオーム",
    "questionText": "植物が単位時間に行う光合成の速さに該当する用語はどれか？",
    "option1": "硬葉樹林",
    "option2": "極相種",
    "option3": "垂直分布",
    "option4": "光合成速度",
    "correctAnswerIndex": "光合成速度"
  },
  {
    "id": 164,
    "subject": "生物基礎",
    "field": "生物の多様性と生態系",
    "unit": "植生と遷移・バイオーム",
    "questionText": "森林の植生が高さによって分かれている構造に該当する用語はどれか？",
    "option1": "バイオーム",
    "option2": "ツンドラ",
    "option3": "二次遷移",
    "option4": "階層構造",
    "correctAnswerIndex": "階層構造"
  },
  {
    "id": 165,
    "subject": "生物基礎",
    "field": "生物の多様性と生態系",
    "unit": "植生と遷移・バイオーム",
    "questionText": "森林の最も高い部分を占める植物層に該当する用語はどれか？",
    "option1": "草本層",
    "option2": "丘陵帯",
    "option3": "相観",
    "option4": "高木層",
    "correctAnswerIndex": "高木層"
  },
  {
    "id": 166,
    "subject": "生物基礎",
    "field": "生物の多様性と生態系",
    "unit": "植生と遷移・バイオーム",
    "questionText": "高木層の下に位置する中くらいの高さの木の層に該当する用語はどれか？",
    "option1": "陰生植物",
    "option2": "低木層",
    "option3": "林床",
    "option4": "亜高木層",
    "correctAnswerIndex": "亜高木層"
  },
  {
    "id": 167,
    "subject": "生物基礎",
    "field": "生物の多様性と生態系",
    "unit": "植生と遷移・バイオーム",
    "questionText": "背の低い木本植物からなる層に該当する用語はどれか？",
    "option1": "草原",
    "option2": "草本層",
    "option3": "高山帯",
    "option4": "低木層",
    "correctAnswerIndex": "低木層"
  },
  {
    "id": 168,
    "subject": "生物基礎",
    "field": "生物の多様性と生態系",
    "unit": "植生と遷移・バイオーム",
    "questionText": "草などの草本植物からなる層に該当する用語はどれか？",
    "option1": "硬葉樹林",
    "option2": "雨緑樹林",
    "option3": "森林限界",
    "option4": "草本層",
    "correctAnswerIndex": "草本層"
  },
  {
    "id": 169,
    "subject": "生物基礎",
    "field": "生物の多様性と生態系",
    "unit": "植生と遷移・バイオーム",
    "questionText": "コケ類や菌類などが見られる森林の最下層に該当する用語はどれか？",
    "option1": "照葉樹林",
    "option2": "林冠",
    "option3": "ギャップ",
    "option4": "地表層",
    "correctAnswerIndex": "地表層"
  },
  {
    "id": 170,
    "subject": "生物基礎",
    "field": "生物の多様性と生態系",
    "unit": "植生と遷移・バイオーム",
    "questionText": "草本植物が優占する植生に該当する用語はどれか？",
    "option1": "針葉樹林",
    "option2": "林床",
    "option3": "ツンドラ",
    "option4": "草原",
    "correctAnswerIndex": "草原"
  },
  {
    "id": 171,
    "subject": "生物基礎",
    "field": "生物の多様性と生態系",
    "unit": "植生と遷移・バイオーム",
    "questionText": "植物がまばらにしか生育できない乾燥・寒冷地の植生に該当する用語はどれか？",
    "option1": "陽生植物",
    "option2": "相観",
    "option3": "階層構造",
    "option4": "荒原",
    "correctAnswerIndex": "荒原"
  },
  {
    "id": 172,
    "subject": "生物基礎",
    "field": "生物の多様性と生態系",
    "unit": "植生と遷移・バイオーム",
    "questionText": "ある環境において植物群落が段階的に変化していく現象に該当する用語はどれか？",
    "option1": "バイオーム",
    "option2": "湿地",
    "option3": "森林",
    "option4": "遷移",
    "correctAnswerIndex": "遷移"
  },
  {
    "id": 173,
    "subject": "生物基礎",
    "field": "生物の多様性と生態系",
    "unit": "植生と遷移・バイオーム",
    "questionText": "遷移の初期に現れる植物に該当する用語はどれか？",
    "option1": "陰樹",
    "option2": "標的細胞",
    "option3": "陽樹",
    "option4": "先駆植物",
    "correctAnswerIndex": "先駆植物"
  },
  {
    "id": 174,
    "subject": "生物基礎",
    "field": "生物の多様性と生態系",
    "unit": "植生と遷移・バイオーム",
    "questionText": "日なたを好んで生育する樹木に該当する用語はどれか？",
    "option1": "草原",
    "option2": "熱帯多雨林",
    "option3": "陰樹",
    "option4": "陽樹",
    "correctAnswerIndex": "陽樹"
  },
  {
    "id": 175,
    "subject": "生物基礎",
    "field": "生物の多様性と生態系",
    "unit": "植生と遷移・バイオーム",
    "questionText": "日陰でも生育できる樹木に該当する用語はどれか？",
    "option1": "荒原",
    "option2": "相観",
    "option3": "陽生植物",
    "option4": "陰樹",
    "correctAnswerIndex": "陰樹"
  },
  {
    "id": 176,
    "subject": "生物基礎",
    "field": "生物の多様性と生態系",
    "unit": "植生と遷移・バイオーム",
    "questionText": "遷移の最終段階で安定した環境に定着する種に該当する用語はどれか？",
    "option1": "ステップ",
    "option2": "雨緑樹林",
    "option3": "高木層",
    "option4": "極相種",
    "correctAnswerIndex": "極相種"
  },
  {
    "id": 177,
    "subject": "生物基礎",
    "field": "生物の多様性と生態系",
    "unit": "植生と遷移・バイオーム",
    "questionText": "林冠が途切れて光が地表に届く空間に該当する用語はどれか？",
    "option1": "林床",
    "option2": "サバンナ",
    "option3": "草本層",
    "option4": "ギャップ",
    "correctAnswerIndex": "ギャップ"
  },
  {
    "id": 178,
    "subject": "生物基礎",
    "field": "生物の多様性と生態系",
    "unit": "植生と遷移・バイオーム",
    "questionText": "土壌のない裸地から始まる遷移に該当する用語はどれか？",
    "option1": "森林限界",
    "option2": "砂漠",
    "option3": "二次遷移",
    "option4": "一次遷移",
    "correctAnswerIndex": "一次遷移"
  },
  {
    "id": 179,
    "subject": "生物基礎",
    "field": "生物の多様性と生態系",
    "unit": "植生と遷移・バイオーム",
    "questionText": "既に土壌がある場所で起こる遷移に該当する用語はどれか？",
    "option1": "光合成速度",
    "option2": "植生",
    "option3": "一次遷移",
    "option4": "二次遷移",
    "correctAnswerIndex": "二次遷移"
  },
  {
    "id": 180,
    "subject": "生物基礎",
    "field": "生物の多様性と生態系",
    "unit": "植生と遷移・バイオーム",
    "questionText": "地域の気候に応じた生物のまとまりに該当する用語はどれか？",
    "option1": "草本層",
    "option2": "照葉樹林",
    "option3": "森林",
    "option4": "バイオーム",
    "correctAnswerIndex": "バイオーム"
  },
  {
    "id": 181,
    "subject": "生物基礎",
    "field": "生物の多様性と生態系",
    "unit": "植生と遷移・バイオーム",
    "questionText": "高温多湿の熱帯に発達する森林バイオームに該当する用語はどれか？",
    "option1": "高山帯",
    "option2": "陰生植物",
    "option3": "硬葉樹林",
    "option4": "熱帯多雨林",
    "correctAnswerIndex": "熱帯多雨林"
  },
  {
    "id": 182,
    "subject": "生物基礎",
    "field": "生物の多様性と生態系",
    "unit": "植生と遷移・バイオーム",
    "questionText": "熱帯に近い地域で見られる森林バイオームに該当する用語はどれか？",
    "option1": "草原",
    "option2": "林冠",
    "option3": "ツンドラ",
    "option4": "亜熱帯多雨林",
    "correctAnswerIndex": "亜熱帯多雨林"
  },
  {
    "id": 183,
    "subject": "生物基礎",
    "field": "生物の多様性と生態系",
    "unit": "植生と遷移・バイオーム",
    "questionText": "雨季に葉を茂らせ乾季に落葉する樹木が主体の森林に該当する用語はどれか？",
    "option1": "陰樹",
    "option2": "荒原",
    "option3": "夏緑樹林",
    "option4": "雨緑樹林",
    "correctAnswerIndex": "雨緑樹林"
  },
  {
    "id": 184,
    "subject": "生物基礎",
    "field": "生物の多様性と生態系",
    "unit": "植生と遷移・バイオーム",
    "questionText": "光沢のある葉をもつ常緑広葉樹が優占する森林に該当する用語はどれか？",
    "option1": "照葉器官",
    "option2": "草原",
    "option3": "砂漠",
    "option4": "照葉樹林",
    "correctAnswerIndex": "照葉樹林"
  },
  {
    "id": 185,
    "subject": "生物基礎",
    "field": "生物の多様性と生態系",
    "unit": "植生と遷移・バイオーム",
    "questionText": "乾燥に強い硬い葉をもつ常緑広葉樹の森林に該当する用語はどれか？",
    "option1": "森林限界",
    "option2": "低木層",
    "option3": "林床",
    "option4": "硬葉樹林",
    "correctAnswerIndex": "硬葉樹林"
  },
  {
    "id": 186,
    "subject": "生物基礎",
    "field": "生物の多様性と生態系",
    "unit": "植生と遷移・バイオーム",
    "questionText": "夏に葉を茂らせ冬に落葉する樹木が中心の森林に該当する用語はどれか？",
    "option1": "相観",
    "option2": "ギャップ",
    "option3": "雨緑樹林",
    "option4": "夏緑樹林",
    "correctAnswerIndex": "夏緑樹林"
  },
  {
    "id": 187,
    "subject": "生物基礎",
    "field": "生物の多様性と生態系",
    "unit": "植生と遷移・バイオーム",
    "questionText": "針状の葉をもつ常緑樹が優占する森林に該当する用語はどれか？",
    "option1": "草本層",
    "option2": "地表層",
    "option3": "亜高木層",
    "option4": "針葉樹林",
    "correctAnswerIndex": "針葉樹林"
  },
  {
    "id": 188,
    "subject": "生物基礎",
    "field": "生物の多様性と生態系",
    "unit": "植生と遷移・バイオーム",
    "questionText": "熱帯・亜熱帯に見られる疎林を含む草原に該当する用語はどれか？",
    "option1": "針葉樹林",
    "option2": "高山帯",
    "option3": "ツンドラ",
    "option4": "サバンナ",
    "correctAnswerIndex": "サバンナ"
  },
  {
    "id": 189,
    "subject": "生物基礎",
    "field": "生物の多様性と生態系",
    "unit": "植生と遷移・バイオーム",
    "questionText": "温帯の降水量が少ない地域に広がる草原に該当する用語はどれか？",
    "option1": "植生",
    "option2": "陰生植物",
    "option3": "照葉樹林",
    "option4": "ステップ",
    "correctAnswerIndex": "ステップ"
  },
  {
    "id": 190,
    "subject": "生物基礎",
    "field": "生物の多様性と生態系",
    "unit": "植生と遷移・バイオーム",
    "questionText": "年間降水量が極端に少なく、植物がほとんど生えない地域に該当する用語はどれか？",
    "option1": "陽樹",
    "option2": "山地帯",
    "option3": "ステップ",
    "option4": "砂漠",
    "correctAnswerIndex": "砂漠"
  },
  {
    "id": 191,
    "subject": "生物基礎",
    "field": "生物の多様性と生態系",
    "unit": "植生と遷移・バイオーム",
    "questionText": "永久凍土のある寒冷地に見られる植生に該当する用語はどれか？",
    "option1": "森林",
    "option2": "草原",
    "option3": "サバンナ",
    "option4": "ツンドラ",
    "correctAnswerIndex": "ツンドラ"
  },
  {
    "id": 192,
    "subject": "生物基礎",
    "field": "生物の多様性と生態系",
    "unit": "植生と遷移・バイオーム",
    "questionText": "地理的な緯度や経度に応じた植生の分布に該当する用語はどれか？",
    "option1": "階層構造",
    "option2": "荒原",
    "option3": "垂直分布",
    "option4": "水平分布",
    "correctAnswerIndex": "水平分布"
  },
  {
    "id": 193,
    "subject": "生物基礎",
    "field": "生物の多様性と生態系",
    "unit": "植生と遷移・バイオーム",
    "questionText": "山の標高によって変化する植生の分布に該当する用語はどれか？",
    "option1": "熱帯多雨林",
    "option2": "バイオーム",
    "option3": "地表層",
    "option4": "垂直分布",
    "correctAnswerIndex": "垂直分布"
  },
  {
    "id": 194,
    "subject": "生物基礎",
    "field": "生物の多様性と生態系",
    "unit": "植生と遷移・バイオーム",
    "questionText": "標高が低く、照葉樹林などが見られる帯に該当する用語はどれか？",
    "option1": "砂漠",
    "option2": "草本層",
    "option3": "亜高山帯",
    "option4": "丘陵帯",
    "correctAnswerIndex": "丘陵帯"
  },
  {
    "id": 195,
    "subject": "生物基礎",
    "field": "生物の多様性と生態系",
    "unit": "植生と遷移・バイオーム",
    "questionText": "標高の高い地域に見られ、夏緑樹林が分布する帯に該当する用語はどれか？",
    "option1": "陰樹",
    "option2": "陽樹",
    "option3": "サバンナ",
    "option4": "山地帯",
    "correctAnswerIndex": "山地帯"
  },
  {
    "id": 196,
    "subject": "生物基礎",
    "field": "生物の多様性と生態系",
    "unit": "植生と遷移・バイオーム",
    "questionText": "山地帯よりさらに高い場所に見られる針葉樹林の帯に該当する用語はどれか？",
    "option1": "林冠",
    "option2": "草本層",
    "option3": "高山帯",
    "option4": "亜高山帯",
    "correctAnswerIndex": "亜高山帯"
  },
  {
    "id": 197,
    "subject": "生物基礎",
    "field": "生物の多様性と生態系",
    "unit": "植生と遷移・バイオーム",
    "questionText": "森林限界より上に位置し、草本植物が分布する帯に該当する用語はどれか？",
    "option1": "バイオーム",
    "option2": "雨緑樹林",
    "option3": "森林",
    "option4": "高山帯",
    "correctAnswerIndex": "高山帯"
  },
  {
    "id": 198,
    "subject": "生物基礎",
    "field": "生物の多様性と生態系",
    "unit": "植生と遷移・バイオーム",
    "questionText": "それ以上高地では森林が成立しない標高の限界に該当する用語はどれか？",
    "option1": "相観",
    "option2": "ステップ",
    "option3": "照葉樹林",
    "option4": "森林限界",
    "correctAnswerIndex": "森林限界"
  },
  {
    "id": 199,
    "subject": "生物基礎",
    "field": "生物の多様性と生態系",
    "unit": "生態系と生物多様性",
    "questionText": "生物とそれを取り巻く非生物的環境が相互に関係し合うまとまりに該当する用語はどれか？",
    "option1": "生態系",
    "option2": "生態系のバランス",
    "option3": "捕食",
    "option4": "生態系サービス",
    "correctAnswerIndex": "生態系"
  },
  {
    "id": 200,
    "subject": "生物基礎",
    "field": "生物の多様性と生態系",
    "unit": "生態系と生物多様性",
    "questionText": "無機物から有機物を合成する生物に該当する用語はどれか？",
    "option1": "生産者",
    "option2": "分解者",
    "option3": "消費者",
    "option4": "食物連鎖",
    "correctAnswerIndex": "生産者"
  },
  {
    "id": 201,
    "subject": "生物基礎",
    "field": "生物の多様性と生態系",
    "unit": "生態系と生物多様性",
    "questionText": "生産者や他の動物を食べて有機物を得る生物に該当する用語はどれか？",
    "option1": "生態ピラミッド",
    "option2": "食物網",
    "option3": "消費者",
    "option4": "個体数ピラミッド",
    "correctAnswerIndex": "消費者"
  },
  {
    "id": 202,
    "subject": "生物基礎",
    "field": "生物の多様性と生態系",
    "unit": "生態系と生物多様性",
    "questionText": "死骸や排出物などを分解し無機物に戻す生物に該当する用語はどれか？",
    "option1": "栄養段階",
    "option2": "生物量ピラミッド",
    "option3": "分解者",
    "option4": "生態ピラミッド",
    "correctAnswerIndex": "分解者"
  },
  {
    "id": 203,
    "subject": "生物基礎",
    "field": "生物の多様性と生態系",
    "unit": "生態系と生物多様性",
    "questionText": "光、水、空気、温度などの生物を取り巻く環境要素に該当する用語はどれか？",
    "option1": "環境形成作用",
    "option2": "自然浄化",
    "option3": "非生物的環境",
    "option4": "富栄養化",
    "correctAnswerIndex": "非生物的環境"
  },
  {
    "id": 204,
    "subject": "生物基礎",
    "field": "生物の多様性と生態系",
    "unit": "生態系と生物多様性",
    "questionText": "非生物的環境が生物に及ぼす影響に該当する用語はどれか？",
    "option1": "富栄養化",
    "option2": "作用",
    "option3": "アオコ",
    "option4": "非生物的環境",
    "correctAnswerIndex": "作用"
  },
  {
    "id": 205,
    "subject": "生物基礎",
    "field": "生物の多様性と生態系",
    "unit": "生態系と生物多様性",
    "questionText": "生物が非生物的環境に及ぼす影響に該当する用語はどれか？",
    "option1": "富栄養化",
    "option2": "自然浄化",
    "option3": "環境形成作用",
    "option4": "アオコ",
    "correctAnswerIndex": "環境形成作用"
  },
  {
    "id": 206,
    "subject": "生物基礎",
    "field": "生物の多様性と生態系",
    "unit": "生態系と生物多様性",
    "questionText": "生態系に存在する種の種類の多さに該当する用語はどれか？",
    "option1": "絶滅",
    "option2": "間接効果",
    "option3": "キーストーン種",
    "option4": "種多様性",
    "correctAnswerIndex": "種多様性"
  },
  {
    "id": 207,
    "subject": "生物基礎",
    "field": "生物の多様性と生態系",
    "unit": "生態系と生物多様性",
    "questionText": "「食う・食われる」の関係でつながる一連の関係に該当する用語はどれか？",
    "option1": "消費者",
    "option2": "個体数ピラミッド",
    "option3": "食物網",
    "option4": "食物連鎖",
    "correctAnswerIndex": "食物連鎖"
  },
  {
    "id": 208,
    "subject": "生物基礎",
    "field": "生物の多様性と生態系",
    "unit": "生態系と生物多様性",
    "questionText": "動物が他の動物を捕らえて食べることに該当する用語はどれか？",
    "option1": "食物連鎖",
    "option2": "捕食",
    "option3": "絶滅",
    "option4": "被食",
    "correctAnswerIndex": "捕食"
  },
  {
    "id": 209,
    "subject": "生物基礎",
    "field": "生物の多様性と生態系",
    "unit": "生態系と生物多様性",
    "questionText": "動物が他の動物に食べられることに該当する用語はどれか？",
    "option1": "被食",
    "option2": "捕食",
    "option3": "生態系",
    "option4": "生態ピラミッド",
    "correctAnswerIndex": "被食"
  },
  {
    "id": 210,
    "subject": "生物基礎",
    "field": "生物の多様性と生態系",
    "unit": "生態系と生物多様性",
    "questionText": "複数の食物連鎖が複雑に絡み合ったつながりに該当する用語はどれか？",
    "option1": "消費者",
    "option2": "分解者",
    "option3": "食物網",
    "option4": "食物連鎖",
    "correctAnswerIndex": "食物網"
  },
  {
    "id": 211,
    "subject": "生物基礎",
    "field": "生物の多様性と生態系",
    "unit": "生態系と生物多様性",
    "questionText": "生態系における生物を栄養の流れに基づいて分類した段階に該当する用語はどれか？",
    "option1": "食物連鎖",
    "option2": "個体数ピラミッド",
    "option3": "分解者",
    "option4": "栄養段階",
    "correctAnswerIndex": "栄養段階"
  },
  {
    "id": 212,
    "subject": "生物基礎",
    "field": "生物の多様性と生態系",
    "unit": "生態系と生物多様性",
    "questionText": "栄養段階ごとの生物の量などを図式化したものに該当する用語はどれか？",
    "option1": "生態ピラミッド",
    "option2": "個体数ピラミッド",
    "option3": "食物網",
    "option4": "食物連鎖",
    "correctAnswerIndex": "生態ピラミッド"
  },
  {
    "id": 213,
    "subject": "生物基礎",
    "field": "生物の多様性と生態系",
    "unit": "生態系と生物多様性",
    "questionText": "栄養段階ごとの個体数を示したピラミッド型の図に該当する用語はどれか？",
    "option1": "個体数ピラミッド",
    "option2": "食物連鎖",
    "option3": "栄養段階",
    "option4": "生態ピラミッド",
    "correctAnswerIndex": "個体数ピラミッド"
  },
  {
    "id": 214,
    "subject": "生物基礎",
    "field": "生物の多様性と生態系",
    "unit": "生態系と生物多様性",
    "questionText": "栄養段階ごとの生物の総量を示した図に該当する用語はどれか？",
    "option1": "個体数ピラミッド",
    "option2": "生態ピラミッド",
    "option3": "生物量ピラミッド",
    "option4": "食物連鎖",
    "correctAnswerIndex": "生物量ピラミッド"
  },
  {
    "id": 215,
    "subject": "生物基礎",
    "field": "生物の多様性と生態系",
    "unit": "生態系と生物多様性",
    "questionText": "生態系の構造や機能に大きな影響を与える種に該当する用語はどれか？",
    "option1": "キーストーン種",
    "option2": "絶滅",
    "option3": "絶滅危惧種",
    "option4": "間接効果",
    "correctAnswerIndex": "キーストーン種"
  },
  {
    "id": 216,
    "subject": "生物基礎",
    "field": "生物の多様性と生態系",
    "unit": "生態系と生物多様性",
    "questionText": "直接関係のない種同士が間接的に影響を与え合うことに該当する用語はどれか？",
    "option1": "絶滅",
    "option2": "間接効果",
    "option3": "種多様性",
    "option4": "キーストーン種",
    "correctAnswerIndex": "間接効果"
  },
  {
    "id": 217,
    "subject": "生物基礎",
    "field": "生物の多様性と生態系",
    "unit": "生態系のバランスと保全",
    "questionText": "生態系における生物間の関係や物質循環が安定している状態に該当する用語はどれか？",
    "option1": "生態系",
    "option2": "生態系のバランス",
    "option3": "自然浄化",
    "option4": "生態系サービス",
    "correctAnswerIndex": "生態系のバランス"
  },
  {
    "id": 218,
    "subject": "生物基礎",
    "field": "生物の多様性と生態系",
    "unit": "生態系のバランスと保全",
    "questionText": "川や湖などの水が自然の働きできれいになることに該当する用語はどれか？",
    "option1": "自然浄化",
    "option2": "赤潮",
    "option3": "作用",
    "option4": "環境形成作用",
    "correctAnswerIndex": "自然浄化"
  },
  {
    "id": 219,
    "subject": "生物基礎",
    "field": "生物の多様性と生態系",
    "unit": "生態系のバランスと保全",
    "questionText": "栄養塩類の増加によって水質が悪化する現象に該当する用語はどれか？",
    "option1": "富栄養化",
    "option2": "赤潮",
    "option3": "自然浄化",
    "option4": "環境形成作用",
    "correctAnswerIndex": "富栄養化"
  },
  {
    "id": 220,
    "subject": "生物基礎",
    "field": "生物の多様性と生態系",
    "unit": "生態系のバランスと保全",
    "questionText": "富栄養化によって発生するシアノバクテリアの大発生に該当する用語はどれか？",
    "option1": "自然浄化",
    "option2": "作用",
    "option3": "赤潮",
    "option4": "アオコ",
    "correctAnswerIndex": "アオコ"
  },
  {
    "id": 221,
    "subject": "生物基礎",
    "field": "生物の多様性と生態系",
    "unit": "生態系のバランスと保全",
    "questionText": "海での富栄養化により植物プランクトンが異常増殖する現象に該当する用語はどれか？",
    "option1": "環境形成作用",
    "option2": "富栄養化",
    "option3": "赤潮",
    "option4": "作用",
    "correctAnswerIndex": "赤潮"
  },
  {
    "id": 222,
    "subject": "生物基礎",
    "field": "生物の多様性と生態系",
    "unit": "生態系のバランスと保全",
    "questionText": "もともとその地域に生息していなかったが、人為的に移入された生物に該当する用語はどれか？",
    "option1": "外来生物",
    "option2": "食物連鎖",
    "option3": "特定外来生物",
    "option4": "食物網",
    "correctAnswerIndex": "外来生物"
  },
  {
    "id": 223,
    "subject": "生物基礎",
    "field": "生物の多様性と生態系",
    "unit": "生態系のバランスと保全",
    "questionText": "生態系や人の健康、農業などに深刻な被害をもたらす外来生物に該当する用語はどれか？",
    "option1": "栄養段階",
    "option2": "外来生物",
    "option3": "作用",
    "option4": "特定外来生物",
    "correctAnswerIndex": "特定外来生物"
  },
  {
    "id": 224,
    "subject": "生物基礎",
    "field": "生物の多様性と生態系",
    "unit": "生態系のバランスと保全",
    "questionText": "大気中の温室効果ガスの増加によって地球の気温が上昇する現象に該当する用語はどれか？",
    "option1": "生物濃縮",
    "option2": "温室効果ガス",
    "option3": "地球温暖化",
    "option4": "温室効果",
    "correctAnswerIndex": "地球温暖化"
  },
  {
    "id": 225,
    "subject": "生物基礎",
    "field": "生物の多様性と生態系",
    "unit": "生態系のバランスと保全",
    "questionText": "大気中の気体が地表からの熱を吸収して再放射し、地球を温める働きに該当する用語はどれか？",
    "option1": "温室効果",
    "option2": "温室効果ガス",
    "option3": "生物濃縮",
    "option4": "地球温暖化",
    "correctAnswerIndex": "温室効果"
  },
  {
    "id": 226,
    "subject": "生物基礎",
    "field": "生物の多様性と生態系",
    "unit": "生態系のバランスと保全",
    "questionText": "二酸化炭素やメタンなど温室効果を持つ気体に該当する用語はどれか？",
    "option1": "温室効果",
    "option2": "生物濃縮",
    "option3": "地球温暖化",
    "option4": "温室効果ガス",
    "correctAnswerIndex": "温室効果ガス"
  },
  {
    "id": 227,
    "subject": "生物基礎",
    "field": "生物の多様性と生態系",
    "unit": "生態系のバランスと保全",
    "questionText": "有害物質が食物連鎖を通じて体内に蓄積し、濃度が高まる現象に該当する用語はどれか？",
    "option1": "地球温暖化",
    "option2": "温室効果",
    "option3": "温室効果ガス",
    "option4": "生物濃縮",
    "correctAnswerIndex": "生物濃縮"
  },
  {
    "id": 228,
    "subject": "生物基礎",
    "field": "生物の多様性と生態系",
    "unit": "生態系のバランスと保全",
    "questionText": "ある地域や地球上からその生物が完全にいなくなることに該当する用語はどれか？",
    "option1": "キーストーン種",
    "option2": "絶滅",
    "option3": "種多様性",
    "option4": "絶滅危惧種",
    "correctAnswerIndex": "絶滅"
  },
  {
    "id": 229,
    "subject": "生物基礎",
    "field": "生物の多様性と生態系",
    "unit": "生態系のバランスと保全",
    "questionText": "絶滅の危険性が高いとされている種に該当する用語はどれか？",
    "option1": "種多様性",
    "option2": "間接効果",
    "option3": "絶滅危惧種",
    "option4": "キーストーン種",
    "correctAnswerIndex": "絶滅危惧種"
  },
  {
    "id": 230,
    "subject": "生物基礎",
    "field": "生物の多様性と生態系",
    "unit": "生態系のバランスと保全",
    "questionText": "生態系が人間に提供している恵みや利益に該当する用語はどれか？",
    "option1": "赤潮",
    "option2": "生態系サービス",
    "option3": "生態系のバランス",
    "option4": "生態系",
    "correctAnswerIndex": "生態系サービス"
  },
  {
    "id": 231,
    "subject": "生物",
    "field": "生物の進化と系統",
    "unit": "生物の進化",
    "questionText": "生物集団の形質が、世代を経るにつれて変化していく現象を何と呼ぶか？",
    "option1": "進化",
    "option2": "退化",
    "option3": "恒常性",
    "option4": "適応",
    "correctAnswerIndex": "進化"
  },
  {
    "id": 232,
    "subject": "生物",
    "field": "生物の進化と系統",
    "unit": "生物の進化",
    "questionText": "地球初期の原始的な環境で、無機物からアミノ酸などの単純な有機物が生成され、生命の材料が作られたとする過程を何と呼ぶか？",
    "option1": "化学進化",
    "option2": "自然発生説",
    "option3": "細胞内共生説",
    "option4": "RNAワールド",
    "correctAnswerIndex": "化学進化"
  },
  {
    "id": 233,
    "subject": "生物",
    "field": "生物の進化と系統",
    "unit": "生物の進化",
    "questionText": "現在の地球上のほとんどの生物が、遺伝情報をDNAに保存し、それを利用して生命活動を行っている状態を指す言葉は何か？",
    "option1": "DNAワールド",
    "option2": "RNAワールド",
    "option3": "プロテインワールド",
    "option4": "細胞内共生",
    "correctAnswerIndex": "DNAワールド"
  },
  {
    "id": 234,
    "subject": "生物",
    "field": "生物の進化と系統",
    "unit": "生物の進化",
    "questionText": "生命の初期段階では、遺伝情報と触媒機能の両方をRNAが担っていたとする仮説を何と呼ぶか？",
    "option1": "RNAワールド",
    "option2": "DNAワールド",
    "option3": "化学進化",
    "option4": "セントラルドグマ",
    "correctAnswerIndex": "RNAワールド"
  },
  {
    "id": 235,
    "subject": "生物",
    "field": "生物の進化と系統",
    "unit": "生物の進化",
    "questionText": "約27億年前に出現し、光合成によって地球上に酸素を供給し始めた原核生物は何か？",
    "option1": "シアノバクテリア",
    "option2": "大腸菌",
    "option3": "乳酸菌",
    "option4": "古細菌",
    "correctAnswerIndex": "シアノバクテリア"
  },
  {
    "id": 236,
    "subject": "生物",
    "field": "生物の進化と系統",
    "unit": "生物の進化",
    "questionText": "シアノバクテリアなどの微生物の活動によって形成される、層状構造を持つ岩石を何と呼ぶか？",
    "option1": "ストロマトライト",
    "option2": "鍾乳石",
    "option3": "化石サンゴ",
    "option4": "珪化木",
    "correctAnswerIndex": "ストロマトライト"
  },
  {
    "id": 237,
    "subject": "生物",
    "field": "生物の進化と系統",
    "unit": "生物の進化",
    "questionText": "真核細胞のミトコンドリアや葉緑体の起源を説明する説で、異なる原核生物が共生することから始まったとするものを何というか？",
    "option1": "細胞内共生",
    "option2": "膜進化説",
    "option3": "化学進化説",
    "option4": "遺伝子重複説",
    "correctAnswerIndex": "細胞内共生"
  },
  {
    "id": 238,
    "subject": "生物",
    "field": "生物の進化と系統",
    "unit": "生物の進化",
    "questionText": "約4億年前に形成され、太陽からの有害な紫外線を吸収することで生物の陸上進出を可能にした大気中の層を何というか？",
    "option1": "オゾン層",
    "option2": "電離層",
    "option3": "対流圏",
    "option4": "磁気圏",
    "correctAnswerIndex": "オゾン層"
  },
  {
    "id": 239,
    "subject": "生物",
    "field": "生物の進化と系統",
    "unit": "生物の進化",
    "questionText": "地球の誕生から現在までを、生物相の変遷などに基づいて区分したものを何と呼ぶか？",
    "option1": "地質時代",
    "option2": "暦",
    "option3": "年代記",
    "option4": "化石記録",
    "correctAnswerIndex": "地質時代"
  },
  {
    "id": 240,
    "subject": "生物",
    "field": "生物の進化と系統",
    "unit": "生物の進化",
    "questionText": "カンブリア紀、オルドビス紀、シルル紀、デボン紀、石炭紀、ペルム紀を含む地質時代を何と呼ぶか？",
    "option1": "古生代",
    "option2": "中生代",
    "option3": "新生代",
    "option4": "先カンブリア時代",
    "correctAnswerIndex": "古生代"
  },
  {
    "id": 241,
    "subject": "生物",
    "field": "生物の進化と系統",
    "unit": "生物の進化",
    "questionText": "三畳紀、ジュラ紀、白亜紀を含み、恐竜が繁栄した地質時代を何と呼ぶか？",
    "option1": "中生代",
    "option2": "古生代",
    "option3": "新生代",
    "option4": "先カンブリア時代",
    "correctAnswerIndex": "中生代"
  },
  {
    "id": 242,
    "subject": "生物",
    "field": "生物の進化と系統",
    "unit": "生物の進化",
    "questionText": "恐竜の絶滅後、哺乳類や鳥類が著しく多様化した、現在に至る地質時代を何と呼ぶか？",
    "option1": "新生代",
    "option2": "中生代",
    "option3": "古生代",
    "option4": "先カンブリア時代",
    "correctAnswerIndex": "新生代"
  },
  {
    "id": 243,
    "subject": "生物",
    "field": "生物の進化と系統",
    "unit": "生物の進化",
    "questionText": "カンブリア紀の直前、先カンブリア時代末期に出現した、硬い殻を持たない大型の多細胞生物群を何と呼ぶか？",
    "option1": "エディアカラ生物群",
    "option2": "バージェス動物群",
    "option3": "シダ植物",
    "option4": "裸子植物",
    "correctAnswerIndex": "エディアカラ生物群"
  },
  {
    "id": 244,
    "subject": "生物",
    "field": "生物の進化と系統",
    "unit": "生物の進化",
    "questionText": "約5億4200万年前からの比較的短い期間に、動物の門のほとんどが出そろったとされる爆発的な生物の多様化現象を何と呼ぶか？",
    "option1": "カンブリア紀の大爆発",
    "option2": "大絶滅",
    "option3": "適応放散",
    "option4": "遺伝的浮動",
    "correctAnswerIndex": "カンブリア紀の大爆発"
  },
  {
    "id": 245,
    "subject": "生物",
    "field": "生物の進化と系統",
    "unit": "生物の進化",
    "questionText": "DNAの塩基配列や染色体の構造・数に生じる、永続的な変化を何と呼ぶか？",
    "option1": "突然変異",
    "option2": "組換え",
    "option3": "遺伝的浮動",
    "option4": "自然選択",
    "correctAnswerIndex": "突然変異"
  },
  {
    "id": 246,
    "subject": "生物",
    "field": "生物の進化と系統",
    "unit": "生物の進化",
    "questionText": "DNAの塩基配列において、ある塩基が別の塩基に置き換わる変異を何と呼ぶか？",
    "option1": "置換",
    "option2": "挿入",
    "option3": "欠失",
    "option4": "フレームシフト",
    "correctAnswerIndex": "置換"
  },
  {
    "id": 247,
    "subject": "生物",
    "field": "生物の進化と系統",
    "unit": "生物の進化",
    "questionText": "DNAの塩基配列に、新たに1つまたは複数の塩基が付け加わる変異を何と呼ぶか？",
    "option1": "挿入",
    "option2": "欠失",
    "option3": "置換",
    "option4": "逆位",
    "correctAnswerIndex": "挿入"
  },
  {
    "id": 248,
    "subject": "生物",
    "field": "生物の進化と系統",
    "unit": "生物の進化",
    "questionText": "DNAの塩基配列や染色体の一部が失われる変異を何と呼ぶか？",
    "option1": "欠失",
    "option2": "挿入",
    "option3": "重複",
    "option4": "転座",
    "correctAnswerIndex": "欠失"
  },
  {
    "id": 249,
    "subject": "生物",
    "field": "生物の進化と系統",
    "unit": "生物の進化",
    "questionText": "DNAの塩基の挿入または欠失により、コドンの読み枠がずれてしまう変異を何と呼ぶか？",
    "option1": "フレームシフト",
    "option2": "一塩基置換(SNP)",
    "option3": "サイレント突然変異",
    "option4": "ナンセンス突然変異",
    "correctAnswerIndex": "フレームシフト"
  },
  {
    "id": 250,
    "subject": "生物",
    "field": "生物の進化と系統",
    "unit": "生物の進化",
    "questionText": "集団内で見られる、ゲノム上の1つの塩基だけが他の塩基に置き換わっている多様性のことを何と呼ぶか？",
    "option1": "一塩基置換(SNP)",
    "option2": "フレームシフト",
    "option3": "染色体突然変異",
    "option4": "遺伝子重複",
    "correctAnswerIndex": "一塩基置換(SNP)"
  },
  {
    "id": 251,
    "subject": "生物",
    "field": "生物の進化と系統",
    "unit": "生物の進化",
    "questionText": "遺伝情報の発現や伝達を担う、DNAとタンパク質からなる細胞内の構造体を何と呼ぶか？",
    "option1": "染色体",
    "option2": "リボソーム",
    "option3": "ゴルジ体",
    "option4": "中心体",
    "correctAnswerIndex": "染色体"
  },
  {
    "id": 252,
    "subject": "生物",
    "field": "生物の進化と系統",
    "unit": "生物の進化",
    "questionText": "体細胞に存在する、同じ大きさと同じ形を持ち、対になっている染色体を何と呼ぶか？",
    "option1": "相同染色体",
    "option2": "姉妹染色分体",
    "option3": "二価染色体",
    "option4": "性染色体",
    "correctAnswerIndex": "相同染色体"
  },
  {
    "id": 253,
    "subject": "生物",
    "field": "生物の進化と系統",
    "unit": "生物の進化",
    "questionText": "細胞に含まれる染色体の構成状態を示す言葉で、複相(2n)や単相(n)などがある。これを何と呼ぶか？",
    "option1": "核相",
    "option2": "遺伝子型",
    "option3": "表現型",
    "option4": "ゲノム",
    "correctAnswerIndex": "核相"
  },
  {
    "id": 254,
    "subject": "生物",
    "field": "生物の進化と系統",
    "unit": "生物の進化",
    "questionText": "相同染色体を2セット持つ状態(2n)を何と呼ぶか？",
    "option1": "複相",
    "option2": "単相",
    "option3": "半数体",
    "option4": "倍数体",
    "correctAnswerIndex": "複相"
  },
  {
    "id": 255,
    "subject": "生物",
    "field": "生物の進化と系統",
    "unit": "生物の進化",
    "questionText": "相同染色体を1セットしか持たない状態(n)を何と呼ぶか？",
    "option1": "単相",
    "option2": "複相",
    "option3": "二倍体",
    "option4": "全数体",
    "correctAnswerIndex": "単相"
  },
  {
    "id": 256,
    "subject": "生物",
    "field": "生物の進化と系統",
    "unit": "生物の進化",
    "questionText": "性別に関係なく、雌雄に共通して存在する染色体を何と呼ぶか？",
    "option1": "常染色体",
    "option2": "性染色体",
    "option3": "X染色体",
    "option4": "Y染色体",
    "correctAnswerIndex": "常染色体"
  },
  {
    "id": 257,
    "subject": "生物",
    "field": "生物の進化と系統",
    "unit": "生物の進化",
    "questionText": "雌雄で構成が異なり、性の決定に関与する染色体を何と呼ぶか？",
    "option1": "性染色体",
    "option2": "常染色体",
    "option3": "相同染色体",
    "option4": "二価染色体",
    "correctAnswerIndex": "性染色体"
  },
  {
    "id": 258,
    "subject": "生物",
    "field": "生物の進化と系統",
    "unit": "生物の進化",
    "questionText": "ヒトの性染色体の一つで、女性は2本、男性は1本持つものを何と呼ぶか？",
    "option1": "X染色体",
    "option2": "Y染色体",
    "option3": "常染色体",
    "option4": "Z染色体",
    "correctAnswerIndex": "X染色体"
  },
  {
    "id": 259,
    "subject": "生物",
    "field": "生物の進化と系統",
    "unit": "生物の進化",
    "questionText": "ヒトの性染色体の一つで、男性のみが持ち、性の決定に重要な役割を果たすものを何と呼ぶか？",
    "option1": "Y染色体",
    "option2": "X染色体",
    "option3": "常染色体",
    "option4": "W染色体",
    "correctAnswerIndex": "Y染色体"
  },
  {
    "id": 260,
    "subject": "生物",
    "field": "生物の進化と系統",
    "unit": "生物の進化",
    "questionText": "次世代に遺伝情報を伝えるための特別な細胞で、減数分裂によって配偶子を形成するものを何と呼ぶか？",
    "option1": "生殖細胞",
    "option2": "体細胞",
    "option3": "幹細胞",
    "option4": "神経細胞",
    "correctAnswerIndex": "生殖細胞"
  },
  {
    "id": 261,
    "subject": "生物",
    "field": "生物の進化と系統",
    "unit": "生物の進化",
    "questionText": "有性生殖のために作られる、単相(n)の生殖細胞（精子や卵など）を何と呼ぶか？",
    "option1": "配偶子",
    "option2": "接合子",
    "option3": "胚",
    "option4": "胞子",
    "correctAnswerIndex": "配偶子"
  },
  {
    "id": 262,
    "subject": "生物",
    "field": "生物の進化と系統",
    "unit": "生物の進化",
    "questionText": "雌雄の配偶子が合体（受精）することによって、新しい個体を作る生殖方法を何と呼ぶか？",
    "option1": "有性生殖",
    "option2": "無性生殖",
    "option3": "分裂",
    "option4": "出芽",
    "correctAnswerIndex": "有性生殖"
  },
  {
    "id": 263,
    "subject": "生物",
    "field": "生物の進化と系統",
    "unit": "生物の進化",
    "questionText": "アオミドロなどに見られる、2つの細胞が合体する現象を何と呼ぶか？",
    "option1": "接合",
    "option2": "受精",
    "option3": "分裂",
    "option4": "栄養生殖",
    "correctAnswerIndex": "接合"
  },
  {
    "id": 264,
    "subject": "生物",
    "field": "生物の進化と系統",
    "unit": "生物の進化",
    "questionText": "動物において、精子と卵などの配偶子が合体することを特に何と呼ぶか？",
    "option1": "受精",
    "option2": "接合",
    "option3": "対合",
    "option4": "乗換え",
    "correctAnswerIndex": "受精"
  },
  {
    "id": 265,
    "subject": "生物",
    "field": "生物の進化と系統",
    "unit": "生物の進化",
    "questionText": "生殖細胞が配偶子を形成する際に行われる、染色体数が半減する細胞分裂を何と呼ぶか？",
    "option1": "減数分裂",
    "option2": "体細胞分裂",
    "option3": "核分裂",
    "option4": "細胞質分裂",
    "correctAnswerIndex": "減数分裂"
  },
  {
    "id": 266,
    "subject": "生物",
    "field": "生物の進化と系統",
    "unit": "生物の進化",
    "questionText": "減数分裂の第一分裂前期に、相同染色体どうしが平行に接着する現象を何と呼ぶか？",
    "option1": "対合",
    "option2": "乗換え",
    "option3": "連鎖",
    "option4": "独立",
    "correctAnswerIndex": "対合"
  },
  {
    "id": 267,
    "subject": "生物",
    "field": "生物の進化と系統",
    "unit": "生物の進化",
    "questionText": "減数分裂の際に対合した一対の相同染色体を何と呼ぶか？",
    "option1": "二価染色体",
    "option2": "姉妹染色分体",
    "option3": "相同染色体",
    "option4": "動原体",
    "correctAnswerIndex": "二価染色体"
  },
  {
    "id": 268,
    "subject": "生物",
    "field": "生物の進化と系統",
    "unit": "生物の進化",
    "questionText": "減数分裂の際に、相同染色体間で腕の一部を交換し、遺伝子の組換えが起こる現象を何と呼ぶか？",
    "option1": "乗換え",
    "option2": "対合",
    "option3": "連鎖",
    "option4": "独立",
    "correctAnswerIndex": "乗換え"
  },
  {
    "id": 269,
    "subject": "生物",
    "field": "生物の進化と系統",
    "unit": "生物の進化",
    "questionText": "減数分裂の際、乗換えが起こった相同染色体の交差部分を何と呼ぶか？",
    "option1": "キアズマ",
    "option2": "動原体",
    "option3": "テロメア",
    "option4": "セントロメア",
    "correctAnswerIndex": "キアズマ"
  },
  {
    "id": 270,
    "subject": "生物",
    "field": "生物の進化と系統",
    "unit": "生物の進化",
    "questionText": "染色体上における、特定の遺伝子の位置を何と呼ぶか？",
    "option1": "遺伝子座",
    "option2": "対立遺伝子",
    "option3": "ゲノム",
    "option4": "遺伝子プール",
    "correctAnswerIndex": "遺伝子座"
  },
  {
    "id": 271,
    "subject": "生物",
    "field": "生物の進化と系統",
    "unit": "生物の進化",
    "questionText": "相同染色体の同じ遺伝子座に存在する、互いに異なる形質を支配する遺伝子を何と呼ぶか？",
    "option1": "対立遺伝子",
    "option2": "相同遺伝子",
    "option3": "重複遺伝子",
    "option4": "偽遺伝子",
    "correctAnswerIndex": "対立遺伝子"
  },
  {
    "id": 272,
    "subject": "生物",
    "field": "生物の進化と系統",
    "unit": "生物の進化",
    "questionText": "ある個体が持つ、特定の形質に関する対立遺伝子の組み合わせを記号で表したものを何と呼ぶか？",
    "option1": "遺伝子型",
    "option2": "表現型",
    "option3": "核型",
    "option4": "遺伝子頻度",
    "correctAnswerIndex": "遺伝子型"
  },
  {
    "id": 273,
    "subject": "生物",
    "field": "生物の進化と系統",
    "unit": "生物の進化",
    "questionText": "ある遺伝子座について、同じ種類の対立遺伝子を持つ個体を何と呼ぶか？",
    "option1": "ホモ接合体",
    "option2": "ヘテロ接合体",
    "option3": "半接合体",
    "option4": "複接合体",
    "correctAnswerIndex": "ホモ接合体"
  },
  {
    "id": 274,
    "subject": "生物",
    "field": "生物の進化と系統",
    "unit": "生物の進化",
    "questionText": "ある遺伝子座について、異なる種類の対立遺伝子を持つ個体を何と呼ぶか？",
    "option1": "ヘテロ接合体",
    "option2": "ホモ接合体",
    "option3": "同型接合体",
    "option4": "純系",
    "correctAnswerIndex": "ヘテロ接合体"
  },
  {
    "id": 275,
    "subject": "生物",
    "field": "生物の進化と系統",
    "unit": "生物の進化",
    "questionText": "同じ染色体上に複数の遺伝子が存在する場合、それらが減数分裂時に行動を共にしやすい現象を何と呼ぶか？",
    "option1": "連鎖",
    "option2": "独立",
    "option3": "乗換え",
    "option4": "組換え",
    "correctAnswerIndex": "連鎖"
  },
  {
    "id": 276,
    "subject": "生物",
    "field": "生物の進化と系統",
    "unit": "生物の進化",
    "questionText": "異なる染色体上にある遺伝子が、互いに影響されずに独立して遺伝する法則を何と呼ぶか？",
    "option1": "独立",
    "option2": "連鎖",
    "option3": "優性の法則",
    "option4": "分離の法則",
    "correctAnswerIndex": "独立"
  },
  {
    "id": 277,
    "subject": "生物",
    "field": "生物の進化と系統",
    "unit": "生物の進化",
    "questionText": "減数分裂時の乗換えによって、連鎖している遺伝子間に新たな組み合わせが生じることを何と呼ぶか？",
    "option1": "組換え",
    "option2": "突然変異",
    "option3": "遺伝的浮動",
    "option4": "選択",
    "correctAnswerIndex": "組換え"
  },
  {
    "id": 278,
    "subject": "生物",
    "field": "生物の進化と系統",
    "unit": "生物の進化",
    "questionText": "全配偶子数に対する、組換えによって生じた配偶子数の割合を百分率で示した値を何と呼ぶか？",
    "option1": "組換え価",
    "option2": "遺伝子頻度",
    "option3": "突然変異率",
    "option4": "適応度",
    "correctAnswerIndex": "組換え価"
  },
  {
    "id": 279,
    "subject": "生物",
    "field": "生物の進化と系統",
    "unit": "生物の進化",
    "questionText": "ゲノム中の一部の領域が重複してコピーされる変異で、新たな遺伝子機能の進化の原動力となると考えられているものを何と呼ぶか？",
    "option1": "遺伝子重複",
    "option2": "遺伝子欠失",
    "option3": "遺伝子逆位",
    "option4": "遺伝子転座",
    "correctAnswerIndex": "遺伝子重複"
  },
  {
    "id": 280,
    "subject": "生物",
    "field": "生物の進化と系統",
    "unit": "生物の進化",
    "questionText": "同じ種の個体間に見られる、形質の多様性を生み出す遺伝的な違いの総称は何か？",
    "option1": "変異",
    "option2": "均一性",
    "option3": "恒常性",
    "option4": "定常状態",
    "correctAnswerIndex": "変異"
  },
  {
    "id": 281,
    "subject": "生物",
    "field": "生物の進化と系統",
    "unit": "生物の進化",
    "questionText": "突然変異や組換えによって生じる、集団内の遺伝子の多様性を何と呼ぶか？",
    "option1": "遺伝的変異",
    "option2": "環境変異",
    "option3": "表現型の可塑性",
    "option4": "後天性形質",
    "correctAnswerIndex": "遺伝的変異"
  },
  {
    "id": 282,
    "subject": "生物",
    "field": "生物の進化と系統",
    "unit": "生物の進化",
    "questionText": "ある生物集団が持つ、すべての対立遺伝子の集まりを何と呼ぶか？",
    "option1": "遺伝子プール",
    "option2": "遺伝子ライブラリ",
    "option3": "ゲノム",
    "option4": "遺伝子地図",
    "correctAnswerIndex": "遺伝子プール"
  },
  {
    "id": 283,
    "subject": "生物",
    "field": "生物の進化と系統",
    "unit": "生物の進化",
    "questionText": "ある集団の遺伝子プール内で、特定の対立遺伝子が占める割合を何と呼ぶか？",
    "option1": "遺伝子頻度",
    "option2": "遺伝子型頻度",
    "option3": "組換え価",
    "option4": "突然変異率",
    "correctAnswerIndex": "遺伝子頻度"
  },
  {
    "id": 284,
    "subject": "生物",
    "field": "生物の進化と系統",
    "unit": "生物の進化",
    "questionText": "集団内で、偶然によって対立遺伝子の頻度が変動する現象を何と呼ぶか？",
    "option1": "遺伝的浮動",
    "option2": "自然選択",
    "option3": "遺伝子流動",
    "option4": "突然変異",
    "correctAnswerIndex": "遺伝的浮動"
  },
  {
    "id": 285,
    "subject": "生物",
    "field": "生物の進化と系統",
    "unit": "生物の進化",
    "questionText": "災害などによって集団サイズが激減し、生き残った個体の遺伝子頻度が元の集団と大きく異なる、遺伝的浮動の特殊な例を何と呼ぶか？",
    "option1": "びん首効果",
    "option2": "創始者効果",
    "option3": "自然選択",
    "option4": "適応放散",
    "correctAnswerIndex": "びん首効果"
  },
  {
    "id": 286,
    "subject": "生物",
    "field": "生物の進化と系統",
    "unit": "生物の進化",
    "questionText": "生存や繁殖に有利な形質を持つ個体が選択的に生き残り、その結果として集団の遺伝子頻度が変化する現象を何と呼ぶか？",
    "option1": "自然選択",
    "option2": "人為選択",
    "option3": "遺伝的浮動",
    "option4": "性選択",
    "correctAnswerIndex": "自然選択"
  },
  {
    "id": 287,
    "subject": "生物",
    "field": "生物の進化と系統",
    "unit": "生物の進化",
    "questionText": "配偶相手をめぐる競争や、異性による選り好みによって起こる進化のメカニズムを何と呼ぶか？",
    "option1": "性選択",
    "option2": "自然選択",
    "option3": "安定化選択",
    "option4": "分断化選択",
    "correctAnswerIndex": "性選択"
  },
  {
    "id": 288,
    "subject": "生物",
    "field": "生物の進化と系統",
    "unit": "生物の進化",
    "questionText": "生物がその生息環境で生存し、繁殖するために有利な形質を持つようになる現象、またはその形質自体を何と呼ぶか？",
    "option1": "適応",
    "option2": "進化",
    "option3": "変異",
    "option4": "恒常性",
    "correctAnswerIndex": "適応"
  },
  {
    "id": 289,
    "subject": "生物",
    "field": "生物の進化と系統",
    "unit": "生物の進化",
    "questionText": "複数の種が互いに影響を及ぼし合いながら進化する現象を何と呼ぶか？",
    "option1": "共進化",
    "option2": "収れん進化",
    "option3": "平行進化",
    "option4": "適応放散",
    "correctAnswerIndex": "共進化"
  },
  {
    "id": 290,
    "subject": "生物",
    "field": "生物の進化と系統",
    "unit": "生物の進化",
    "questionText": "起源は同じだが、現在の形や働きが異なる器官（例：ヒトの腕とコウモリの翼）を何と呼ぶか？",
    "option1": "相同器官",
    "option2": "相似器官",
    "option3": "痕跡器官",
    "option4": "適応器官",
    "correctAnswerIndex": "相同期間"
  },
  {
    "id": 291,
    "subject": "生物",
    "field": "生物の進化と系統",
    "unit": "生物の進化",
    "questionText": "単一の祖先種から、多様な環境に適応した多数の種が急速に分化する現象を何と呼ぶか？",
    "option1": "適応放散",
    "option2": "収れん進化",
    "option3": "系統進化",
    "option4": "大進化",
    "correctAnswerIndex": "適応放散"
  },
  {
    "id": 292,
    "subject": "生物",
    "field": "生物の進化と系統",
    "unit": "生物の進化",
    "questionText": "起源は異なるが、似たような環境への適応の結果、似た形や働きを持つようになった器官（例：鳥の翼と昆虫の翅）を何と呼ぶか？",
    "option1": "相似器官",
    "option2": "相同器官",
    "option3": "痕跡器官",
    "option4": "退化器官",
    "correctAnswerIndex": "相似器官"
  },
  {
    "id": 293,
    "subject": "生物",
    "field": "生物の進化と系統",
    "unit": "生物の進化",
    "questionText": "系統的に遠い生物が、似たような環境に適応した結果、互いに似た形質を持つようになる現象を何と呼ぶか？",
    "option1": "収れん",
    "option2": "適応放散",
    "option3": "共進化",
    "option4": "分岐",
    "correctAnswerIndex": "収れん"
  },
  {
    "id": 294,
    "subject": "生物",
    "field": "生物の進化と系統",
    "unit": "生物の進化",
    "questionText": "特定の条件下で、集団内の対立遺伝子の頻度が世代を経ても変化しないことを示す法則を何と呼ぶか？",
    "option1": "ハーディ・ワインベルグの法則",
    "option2": "メンデルの法則",
    "option3": "用不用説",
    "option4": "遺伝的浮動",
    "correctAnswerIndex": "ハーディ・ワインベルグの法則"
  },
  {
    "id": 295,
    "subject": "生物",
    "field": "生物の進化と系統",
    "unit": "生物の進化",
    "questionText": "自然状態で交配し、生殖能力のある子孫を残すことができる生物の集団を何と呼ぶか？",
    "option1": "種",
    "option2": "属",
    "option3": "科",
    "option4": "目",
    "correctAnswerIndex": "種"
  },
  {
    "id": 296,
    "subject": "生物",
    "field": "生物の進化と系統",
    "unit": "生物の進化",
    "questionText": "もとは一つの種であった集団から、新しい種が形成される過程を何と呼ぶか？",
    "option1": "種分化",
    "option2": "小進化",
    "option3": "大進化",
    "option4": "遺伝的浮動",
    "correctAnswerIndex": "種分化"
  },
  {
    "id": 297,
    "subject": "生物",
    "field": "生物の進化と系統",
    "unit": "生物の進化",
    "questionText": "種内の遺伝子頻度の変化など、比較的短い時間スケールで起こる進化を何と呼ぶか？",
    "option1": "小進化",
    "option2": "大進化",
    "option3": "種分化",
    "option4": "適応放散",
    "correctAnswerIndex": "小進化"
  },
  {
    "id": 298,
    "subject": "生物",
    "field": "生物の進化と系統",
    "unit": "生物の進化",
    "questionText": "新しい門や綱の出現など、種よりも上位の分類群のレベルで起こる大規模な進化を何と呼ぶか？",
    "option1": "大進化",
    "option2": "小進化",
    "option3": "遺伝的浮動",
    "option4": "自然選択",
    "correctAnswerIndex": "大進化"
  },
  {
    "id": 299,
    "subject": "生物",
    "field": "生物の進化と系統",
    "unit": "生物の進化",
    "questionText": "山脈や海などによって集団が分断され、遺伝子交流が妨げられる状態を何と呼ぶか？",
    "option1": "地理的隔離",
    "option2": "生殖的隔離",
    "option3": "時間的隔離",
    "option4": "生態的隔離",
    "correctAnswerIndex": "地理的隔離"
  },
  {
    "id": 300,
    "subject": "生物",
    "field": "生物の進化と系統",
    "unit": "生物の進化",
    "questionText": "異種間で交雑が起こらないようにする仕組みの総称で、交雑しても子孫ができない、または子孫に生殖能力がない場合などを含む。これを何と呼ぶか？",
    "option1": "生殖的隔離",
    "option2": "地理的隔離",
    "option3": "行動的隔離",
    "option4": "機械的隔離",
    "correctAnswerIndex": "生殖的隔離"
  },
  {
    "id": 301,
    "subject": "生物",
    "field": "生物の進化と系統",
    "unit": "生物の進化",
    "questionText": "地理的隔離によって集団が分断され、それぞれの環境で独立に進化することで生じる種分化を何と呼ぶか？",
    "option1": "異所的種分化",
    "option2": "同所的種分化",
    "option3": "周辺種分化",
    "option4": "縁辺種分化",
    "correctAnswerIndex": "異所的種分化"
  },
  {
    "id": 302,
    "subject": "生物",
    "field": "生物の進化と系統",
    "unit": "生物の進化",
    "questionText": "同じ地域に生息しながら、倍数化や生態的な要因によって生殖的隔離が生じ、新しい種が生まれる様式を何と呼ぶか？",
    "option1": "同所的種分化",
    "option2": "異所的種分化",
    "option3": "適応放散",
    "option4": "遺伝的浮動",
    "correctAnswerIndex": "同所的種分化"
  },
  {
    "id": 303,
    "subject": "生物",
    "field": "生物の進化と系統",
    "unit": "生物の進化",
    "questionText": "ゲノムを3セット以上持つ生物個体を何と呼ぶか？",
    "option1": "倍数体",
    "option2": "二倍体",
    "option3": "単数体",
    "option4": "異数体",
    "correctAnswerIndex": "倍数体"
  },
  {
    "id": 304,
    "subject": "生物",
    "field": "生物の進化と系統",
    "unit": "生物の進化",
    "questionText": "DNAの塩基配列やタンパク質のアミノ酸配列などの分子レベルで起こる進化を何と呼ぶか？",
    "option1": "分子進化",
    "option2": "形態進化",
    "option3": "細胞進化",
    "option4": "個体発生",
    "correctAnswerIndex": "分子進化"
  },
  {
    "id": 305,
    "subject": "生物",
    "field": "生物の進化と系統",
    "unit": "生物の進化",
    "questionText": "アミノ酸配列の変化を起こさない中立な突然変異が一定の速度で蓄積することを利用して、生物の分岐年代を推定する考え方を何と呼ぶか？",
    "option1": "分子時計",
    "option2": "中立説",
    "option3": "化石年代法",
    "option4": "放射性炭素年代測定",
    "correctAnswerIndex": "分子時計"
  },
  {
    "id": 306,
    "subject": "生物",
    "field": "生物の進化と系統",
    "unit": "生物の進化",
    "questionText": "進化の大部分は、自然選択に有利でも不利でもない中立な突然変異が、遺伝的浮動によって偶然広まった結果であるとする説を何と呼ぶか？",
    "option1": "中立説",
    "option2": "自然選択説",
    "option3": "用不用説",
    "option4": "獲得形質遺伝説",
    "correctAnswerIndex": "中立説"
  }
    
  ];

// ---------------------------
// 状態管理
// ---------------------------
let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let mistakes = [];
let currentMode = "normal";

// ---------------------------
// DOM取得
// ---------------------------
const subjectSelect = document.getElementById('subjectSelect');
const unitSelect = document.getElementById('unitSelect');
const modeSelect = document.getElementById('modeSelect');
const startBtn = document.getElementById('startBtn');
const showStatsBtn = document.getElementById('showStatsBtn');
const showMistakesBtn = document.getElementById('showMistakesBtn');

const quizContainer = document.getElementById('quizContainer');
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const nextBtn = document.getElementById('nextBtn');

const resultContainer = document.getElementById('resultContainer');
const resultEl = document.getElementById('result');
const mistakeList = document.getElementById('mistakeList');
const retryBtn = document.getElementById('retryBtn');

const statsContainer = document.getElementById('statsContainer');
const statsList = document.getElementById('statsList');

// ---------------------------
// 初期化
// ---------------------------
function init() {
  const subjects = [...new Set(questions.map(q => q.subject))];
  subjects.forEach(s => {
    const option = document.createElement('option');
    option.value = s;
    option.textContent = s;
    subjectSelect.appendChild(option);
  });

  subjectSelect.addEventListener('change', updateUnits);
  updateUnits();
}

function updateUnits() {
  unitSelect.innerHTML = "";
  const units = [...new Set(questions
    .filter(q => q.subject === subjectSelect.value)
    .map(q => q.unit)
  )];
  units.forEach(u => {
    const option = document.createElement('option');
    option.value = u;
    option.textContent = u;
    unitSelect.appendChild(option);
  });
}

// ---------------------------
// クイズ開始
// ---------------------------
startBtn.addEventListener('click', () => {
  currentMode = "normal";
  statsContainer.classList.add('hidden');
  resultContainer.classList.add('hidden');

  const filtered = questions.filter(q =>
    q.subject === subjectSelect.value && q.unit === unitSelect.value
  );

  shuffleArray(filtered);

  if (modeSelect.value === "10") {
    currentQuestions = filtered.slice(0, 10);
  } else {
    currentQuestions = filtered;
  }

  currentIndex = 0;
  score = 0;
  mistakes = [];

  quizContainer.classList.remove('hidden');
  showQuestion();
});

function showQuestion() {
  const q = currentQuestions[currentIndex];
  questionEl.textContent = `Q${currentIndex + 1}: ${q.questionText}`;

  const options = [q.option1, q.option2, q.option3, q.option4];
  shuffleArray(options);

  optionsEl.innerHTML = "";
  options.forEach(opt => {
    const btn = document.createElement('button');
    btn.textContent = opt;
    btn.addEventListener('click', () => checkAnswer(btn, opt, q.correctAnswerIndex, q));
    optionsEl.appendChild(btn);
  });

  nextBtn.classList.add('hidden');
}

function checkAnswer(button, selected, correct, question) {
  const buttons = optionsEl.querySelectorAll('button');
  buttons.forEach(b => b.disabled = true);

  if (selected === correct) {
    button.classList.add('correct');
    score++;

    saveStats(question.unit, true);
    updateMistakeList(question, true);

  } else {
    button.classList.add('wrong');
    buttons.forEach(b => {
      if (b.textContent === correct) b.classList.add('correct');
    });

    saveStats(question.unit, false);
    updateMistakeList(question, false);
  }

  nextBtn.classList.remove('hidden');
}

nextBtn.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex < currentQuestions.length) {
    showQuestion();
  } else {
    finishQuiz();
  }
});

// ---------------------------
// 結果処理
// ---------------------------
function finishQuiz() {
  quizContainer.classList.add('hidden');
  resultContainer.classList.remove('hidden');

  resultEl.textContent = `正解数: ${score} / ${currentQuestions.length}`;

  const mistakesData = getMistakes();
  if (mistakesData.length > 0) {
    mistakeList.innerHTML = "<h3>苦手問題</h3>";
    mistakesData.forEach(m => {
      const item = document.createElement('div');
      item.innerHTML = `
        <p>${m.questionText}<br><strong>答え:</strong> ${m.correctAnswerIndex} 
        （連続正解: ${m.consecutiveCorrect}）</p>`;
      mistakeList.appendChild(item);
    });
    retryBtn.classList.remove('hidden');
  } else {
    mistakeList.innerHTML = "<p>苦手問題はありません！</p>";
    retryBtn.classList.add('hidden');
  }
}

// ---------------------------
// 苦手問題再挑戦
// ---------------------------
retryBtn.addEventListener('click', () => {
  currentMode = "mistake";
  resultContainer.classList.add('hidden');
  statsContainer.classList.add('hidden');

  const mistakesData = getMistakes();
  if (mistakesData.length === 0) {
    alert("苦手問題がありません！");
    return;
  }

  shuffleArray(mistakesData);

  currentQuestions = mistakesData;
  currentIndex = 0;
  score = 0;
  mistakes = [];

  quizContainer.classList.remove('hidden');
  showQuestion();
});

// ---------------------------
// 正答率
// ---------------------------
showStatsBtn.addEventListener('click', () => {
  quizContainer.classList.add('hidden');
  resultContainer.classList.add('hidden');
  statsContainer.classList.remove('hidden');

  statsList.innerHTML = "";

  const stats = JSON.parse(localStorage.getItem('stats') || "{}");
  for (let unit in stats) {
    const s = stats[unit];
    const ratio = ((s.correct / s.total) * 100).toFixed(1);
    const item = document.createElement('div');
    item.textContent = `${unit}: ${ratio}% (${s.correct}/${s.total})`;
    statsList.appendChild(item);
  }
});

// ---------------------------
// 苦手問題モード
// ---------------------------
showMistakesBtn.addEventListener('click', () => {
  const mistakesData = getMistakes();
  if (mistakesData.length === 0) {
    alert("苦手問題はありません！");
    return;
  }
  resultContainer.classList.add('hidden');
  statsContainer.classList.add('hidden');

  mistakeList.innerHTML = "<h3>苦手問題一覧</h3>";
  mistakesData.forEach(m => {
    const item = document.createElement('div');
    item.innerHTML = `
      <p>${m.questionText}<br><strong>答え:</strong> ${m.correctAnswerIndex} 
      （連続正解: ${m.consecutiveCorrect}）</p>`;
    mistakeList.appendChild(item);
  });
  resultContainer.classList.remove('hidden');
  retryBtn.classList.remove('hidden');
});

// ---------------------------
// データ保存
// ---------------------------
function saveStats(unit, isCorrect) {
  let stats = JSON.parse(localStorage.getItem('stats') || "{}");
  if (!stats[unit]) stats[unit] = { correct: 0, total: 0 };
  if (isCorrect) stats[unit].correct++;
  stats[unit].total++;
  localStorage.setItem('stats', JSON.stringify(stats));
}

function updateMistakeList(question, isCorrect) {
  let mistakes = JSON.parse(localStorage.getItem('mistakes') || "[]");
  let m = mistakes.find(m => m.id === question.id);
  if (!m && !isCorrect) {
    mistakes.push({ id: question.id, ...question, consecutiveCorrect: 0 });
  } else if (m) {
    if (isCorrect) {
      m.consecutiveCorrect++;
      if (m.consecutiveCorrect >= 3) {
        mistakes = mistakes.filter(x => x.id !== question.id);
      }
    } else {
      m.consecutiveCorrect = 0;
    }
  }
  localStorage.setItem('mistakes', JSON.stringify(mistakes));
}

function getMistakes() {
  return JSON.parse(localStorage.getItem('mistakes') || "[]");
}

// ---------------------------
// ユーティリティ
// ---------------------------
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// ---------------------------
// 初期化呼び出し
// ---------------------------
init();
