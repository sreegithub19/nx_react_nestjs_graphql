import { Injectable } from '@nestjs/common';
import { NewRecipeInput } from './dto/new-recipe.input';
import { RecipesArgs } from './dto/recipes.args';
import { Recipe } from './models/recipe.model';

@Injectable()
export class RecipesService {
  /**
   * MOCK
   * Put some real business logic here
   * Left for demonstration purposes
   */

  private id = 0;

  private store = new Map<string, Recipe>();

  async create(data: NewRecipeInput): Promise<Recipe> {

    this.id++
    const newRecipe: Recipe = {... data, ...{id: `${this.id}`, creationDate: new Date()}};
    this.store.set(`${this.id}`, newRecipe);
    return newRecipe as any;
  }

  async findOneById(id: string): Promise<Recipe> {
    return {} as any;
  }

  async findAll(recipesArgs: RecipesArgs): Promise<Recipe[]> {
    return Array.from(this.store.values()) as Recipe[];
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}