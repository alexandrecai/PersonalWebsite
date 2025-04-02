export class Projet{

  constructor(
    public name: string,
    public description: string,
    public imageUrl: string,
    public contributors : string[],
    public technos: string[],
    public git?: string
  ) {}
}
