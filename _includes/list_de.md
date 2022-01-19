{% assign post = include.post %}
    <article id="{{ post.id }}">
      <div>
        <p>{{ post.title | strip_html }}</p>
        {% assign date_format = site.date_format | default: "%B %-d, %Y" %}
        {% if post.status != "default" %}
        <p>&emsp;<mark>{{ post.status }}</mark>&emsp;<time datetime="{{ post.date }}">{{ post.date | date: date_format }}</time></p>
        {% else %}
        <p>&emsp;<time datetime="{{ post.date }}">{{ post.date | date: date_format }}</time></p>
        {% endif %}
      </div>
        <h2><a href="{{ post.credit }}" target="_blank"><div data-icon="ei-external-link" data-size="s"></div> {{ post.de.subtitle }}</a></h2>
      <p>Autoren: {{ post.authors }}</p>
      <blockquote cite="{{ post.credit }}">
        <p class="content">„{{post.de.description | replace: '"', "'"}}“</p>
      </blockquote>
      {% if post.de.tags and post.de.tags.size > 0 %}
      <p>Schlüsselworte: {{ post.de.tags | join: ", " }}
      {% endif %}
    </article>
