# blog/views.py

from django.shortcuts import render
from .models import Post, Comment

def get_all_and_recent(model, recent_limit=5):
    all_items = model.objects.all()
    recent_items = model.objects.order_by('-created_at')[:recent_limit]
    return all_items, recent_items

def show_all_posts(request):
    posts, recent_posts = get_all_and_recent(Post)
    context = {
        'posts': posts,
        'recent_posts': recent_posts,
        'title': "All Posts"
    }
    return render(request, 'blog/posts.html', context)

def show_all_comments(request):
    comments, recent_comments = get_all_and_recent(Comment)
    context = {
        'comments': comments,
        'recent_comments': recent_comments,
        'title': "All Comments"
    }
    return render(request, 'blog/comments.html', context)
