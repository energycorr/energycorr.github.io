module PostNavigation
  class AuthorPostNavigation < Jekyll::Generator
    priority :high
    safe true

    def generate(site)
      Jekyll.logger.info("Starting custom plugin")
      # Get all the posts sorted by date
=begin
      sorted_posts = site.posts.docs.sort_by(&:date)

      # Group posts by author
      author_posts = sorted_posts.group_by { |post| post.data['author'] }
      print author_posts

      # Iterate over each author's posts and add previous and next links
      author_posts.each do |author, posts|
        posts.each_with_index do |post, index|
          prev_post = posts[index - 1]
          next_post = posts[index + 1]

          # Add the previous and next post URLs to the post's data
          post.data['prev_by_author'] = prev_post.url if prev_post && prev_post.data['author'] == author
          post.data['next_by_author'] = next_post.url if next_post && next_post.data['author'] == author
        end
      end
=end
    end
  end
end
