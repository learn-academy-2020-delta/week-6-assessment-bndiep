# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# 1) The name of the BlogPosts controller that will hold all the methods necessary to route an external request
class BlogPostsController < ApplicationController
  def index
    # 2) The instance variable posts is assigned to all the BlogPosts, so this allows the user to get the entire hash of all blog posts that have been made.
    @posts = BlogPost.all
  end

  def show
    # 3) The instance variable posts is assigned to a single blog post, which can be found by providing the specific id number associated with that blog post as a parameter in the blogs url.
    @post = BlogPost.find(params[:id])
  end

  # 4) Method associated with the post HTTP verb that will assist in creating a new blog post.
  def new
    @post = Post.new
  end

  def create
    # 5) Instance variable post is assigned to a new BlogPost that takes a parameter, which is the blogs data fields, title and content. The title and content is required because it appears in the protected, private section. 
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # 6) Updates the specific blog post by requiring the user to edit the title and the content of the blog post for it to be valid.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # 7) If the blog post cannot be destroyed, redirect the user to the blog post they were trying to destroy (because the method was unsuccessful).
      redirect_to blog_post_path(@post)
    end
  end

  # 8) The strong params section is separated by the private keyword.
  private
  def blog_post_params
    # 9) The fields that a user can add or is required for the blog post database is the title and the content.
    params.require(:blog_post).permit(:title, :content)
  end

end


# FILE: app/models/blog_post.rb

class BlogPost < ApplicationRecord
  # 10) The BlogPost model has many comments. The Comments model belong to BlogPost. Specifies the relationship between a BlogPost and Comments.
  has_many :comments
end
