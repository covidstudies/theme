{% assign post = include.post %}
    <a id="{{ post.id }}"></a>
    <article id="{{ post.id }}-article">
      <div>
        <p>{{ post.title | strip_html }}</p>
        {% assign date_format = site.date_format | default: "%B %-d, %Y" %}
        {% if post.status != "default" %}
        <p>&emsp;<em>{{ post.status }}</em>&emsp;<time datetime="{{ post.date }}">{{ post.date | date: date_format }}</time></p>
        {% else %}
        <p>&emsp;<time datetime="{{ post.date }}">{{ post.date | date: date_format }}</time></p>
        {% endif %}
      </div>
        <h2><a href="{{ post.credit }}" target="_blank"><div data-icon="ei-external-link" data-size="s"></div> {{ post.en.subtitle }}</a></h2>
      <p>Authors: {{ post.authors }}</p>
      <blockquote cite="{{ post.credit }}">
        <p class="content_en">“{{post.en.description | replace: '"', "'"}}”</p>
      </blockquote>
      {% if post.en.tags and post.en.tags.size > 0 %}
      <p>Keywords: {{ post.en.tags | join: ", " }}</p>
      {% endif %}
      <aside class="group"><a href="/studies_en_{{ post.group | downcase }}.html#{{ post.id }}"><div data-icon="ei-chevron-right" data-size="s"></div><p>{{ site.data.groups[post.group]['en_name'] }}</p></a></aside>
    </article>
