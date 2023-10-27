import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BlogService } from './blog.service';

@Controller('blog')
export class BlogController {
  blogService: BlogService;

  constructor() {
    this.blogService = new BlogService();
  }

  @Get()
  getAllPosts() {
    console.log('all posts');
    return this.blogService.getAllPosts();
  }

  @Post()
  createPost(@Body() postDto) {
    console.log('create post');
    this.blogService.createPost(postDto);
    return 'success';
  }

  @Get('/:id')
  getPost(@Param('id') id: string) {
    console.log(`${id} get post`);
    return this.blogService.getPost(id);
  }

  @Delete('/:id')
  deletePost(@Param('id') id: string) {
    console.log('delete post');
    this.blogService.deletePost(id);
    return 'success';
  }

  @Put('/:id')
  updatePost(@Param('id') id, @Body() postDto) {
    console.log(`${id} post update`);
    console.log(postDto);
    this.blogService.updatePost(id, postDto);
  }
}
