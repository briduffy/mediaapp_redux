class Api::PostsController < ApplicationController
  before_action :set_post, only: [:show, :update, :destroy]

  def index
    render json: Post.order(time: :desc)
  end

  def show
    render json: @post
  end

  def create
    post = Post.create(post_params)
    if post.save
      render json: post
    else
      render json: app.errors, status: 422
    end    
  end

  def update
    if @post.update(post_params)
      render json: @post
    else
      render json: @post.errors, status: 422
    end
  end

  def destroy
    @post.destroy
  end

  private
  def set_post
    @post = Post.find(params[:id])
  end

  def post_params
    params.require(:post).permit(
      :user,
      :time,
      :location,
      :post
    )
  end
end