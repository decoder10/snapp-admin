import client from './api';

export const getTranslations = (lang: string) => client().get<IKeyValueObject>(`static/translations/${lang}.json`);
