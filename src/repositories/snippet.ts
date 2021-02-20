import { getRepository } from 'typeorm';
import { Snippet } from '../models';

export interface ISnippetPayload {
    text: string;
}

export const getSnippets = async (): Promise<Array<Snippet>> => {
    const snippetRepository = getRepository(Snippet);
    return snippetRepository.find();
};

export const createSnippet = async (payload: ISnippetPayload): Promise<Snippet> => {
    const snippetRepository = getRepository(Snippet);
    const snippet = new Snippet();
    return snippetRepository.save({
        ...snippet,
        ...payload,
    });
};

export const getSnippet = async (id: number): Promise<Snippet | null> => {
    const snippetRepository = getRepository(Snippet);
    const snippet = await snippetRepository.findOne({ id });
    if (!snippet) return null;
    return snippet;
};
