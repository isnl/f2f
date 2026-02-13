// API 国际化模块

const translations: Record<string, Record<string, string>> = {
  en: {
    missingParams: 'Missing required parameters',
    invalidShareCode: 'Share code must be 6 uppercase letters or digits',
    contentTooLarge: 'Content size exceeds 25MB limit',
    codeAlreadyUsed: 'This share code is already in use, please try another',
    uploadSuccess: 'Upload successful',
    serverError: 'Server error: ',
    missingCode: 'Missing share code',
    codeNotFound: 'Share code does not exist or has expired',
  },
  zh: {
    missingParams: '缺少必要参数',
    invalidShareCode: '分享码必须是6位数字或大写字母',
    contentTooLarge: '内容大小超过25MB限制',
    codeAlreadyUsed: '该分享码已被使用，请更换',
    uploadSuccess: '上传成功',
    serverError: '服务器错误: ',
    missingCode: '缺少分享码',
    codeNotFound: '分享码不存在或已过期',
  },
  ja: {
    missingParams: '必須パラメータが不足しています',
    invalidShareCode: '共有コードは6桁の数字または大文字の英字である必要があります',
    contentTooLarge: 'コンテンツサイズが25MBの制限を超えています',
    codeAlreadyUsed: 'この共有コードは既に使用されています。別のコードをお試しください',
    uploadSuccess: 'アップロード成功',
    serverError: 'サーバーエラー: ',
    missingCode: '共有コードが必要です',
    codeNotFound: '共有コードが存在しないか、有効期限が切れています',
  },
  ko: {
    missingParams: '필수 매개변수가 누락되었습니다',
    invalidShareCode: '공유 코드는 6자리 숫자 또는 대문자여야 합니다',
    contentTooLarge: '콘텐츠 크기가 25MB 제한을 초과합니다',
    codeAlreadyUsed: '이 공유 코드는 이미 사용 중입니다. 다른 코드를 시도하세요',
    uploadSuccess: '업로드 성공',
    serverError: '서버 오류: ',
    missingCode: '공유 코드가 필요합니다',
    codeNotFound: '공유 코드가 존재하지 않거나 만료되었습니다',
  },
  es: {
    missingParams: 'Faltan parámetros obligatorios',
    invalidShareCode: 'El código debe tener 6 dígitos o letras mayúsculas',
    contentTooLarge: 'El contenido supera el límite de 25MB',
    codeAlreadyUsed: 'Este código ya está en uso, por favor intente otro',
    uploadSuccess: 'Carga exitosa',
    serverError: 'Error del servidor: ',
    missingCode: 'Falta el código de compartir',
    codeNotFound: 'El código no existe o ha expirado',
  },
  fr: {
    missingParams: 'Paramètres requis manquants',
    invalidShareCode: 'Le code doit comporter 6 chiffres ou lettres majuscules',
    contentTooLarge: 'La taille du contenu dépasse la limite de 25 Mo',
    codeAlreadyUsed: 'Ce code est déjà utilisé, veuillez en essayer un autre',
    uploadSuccess: 'Téléchargement réussi',
    serverError: 'Erreur du serveur : ',
    missingCode: 'Code de partage manquant',
    codeNotFound: "Le code n'existe pas ou a expiré",
  },
  de: {
    missingParams: 'Erforderliche Parameter fehlen',
    invalidShareCode: 'Der Code muss aus 6 Ziffern oder Großbuchstaben bestehen',
    contentTooLarge: 'Inhaltsgröße überschreitet das 25-MB-Limit',
    codeAlreadyUsed: 'Dieser Code wird bereits verwendet, bitte versuchen Sie einen anderen',
    uploadSuccess: 'Upload erfolgreich',
    serverError: 'Serverfehler: ',
    missingCode: 'Freigabecode fehlt',
    codeNotFound: 'Der Code existiert nicht oder ist abgelaufen',
  },
};

type SupportedLang = keyof typeof translations;

export function getTranslator(request: Request) {
  const url = new URL(request.url);
  const lang = (url.searchParams.get('lang') || 'en') as SupportedLang;
  const messages = translations[lang] || translations['en'];

  return function t(key: string): string {
    return messages[key] || translations['en'][key] || key;
  };
}
