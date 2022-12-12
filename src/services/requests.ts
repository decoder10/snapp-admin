import client from 'services/api';

export const getTranslations = (lang: string) => client().get<IKeyValueObject>(`static/translations/${lang}.json`);
