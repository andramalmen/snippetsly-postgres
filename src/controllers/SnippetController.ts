import { GET, Path } from 'typescript-rest';

interface SnippetResponse {
    text: string;
}

@Path('/')
export default class SnippetController {
    @GET
    @Path('hello')
    public async getText(): Promise<SnippetResponse> {
        return {
            text: 'Hello World',
        };
    }
}
