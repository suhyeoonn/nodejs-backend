import { PostDto } from './blog.model';
import { BlogFileRepository, BlogRepository } from './blog.repository';

export class BlogService {
  blogRepository: BlogRepository;

  constructor() {
    this.blogRepository = new BlogFileRepository();
  }

  async getAllPosts() {
    return await this.blogRepository.getAllPost();
  }

  createPost(postDto: PostDto) {
    this.blogRepository.createPost(postDto);
  }

  async getPost(id) {
    return await this.blogRepository.getPost(id);
  }

  deletePost(id) {
    this.blogRepository.deletePost(id);
  }

  updatePost(id, postDto: PostDto) {
    this.blogRepository.updatePost(id, postDto);
  }
}
