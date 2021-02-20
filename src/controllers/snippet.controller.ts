import { GET, Path, POST, PathParam } from 'typescript-rest';
import { Snippet } from '../models';
import { getSnippet, createSnippet, ISnippetPayload, getSnippets } from '../repositories/snippet';

@Path('/api/snippets')
export default class SnippetController {
    @GET
    @Path('/')
    public async getSnippets(): Promise<Array<Snippet>> {
        return getSnippets();
    }

    @POST
    @Path('/')
    public async createUser(body: ISnippetPayload): Promise<Snippet> {
        return createSnippet(body);
    }

    @GET
    @Path(':id')
    public async getUser(@PathParam('id') id: string): Promise<Snippet | null> {
        return getSnippet(Number(id));
    }
}
