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
        <h2 class="subtitle"><a href="{{ post.credit }}" target="_blank"><div data-icon="ei-external-link" data-size="s"></div> {{ post.de.subtitle }}</a></h2>
      <p>Autoren: {{ post.authors }}</p>
      <blockquote cite="{{ post.credit }}">
        <p class="content">„{{post.de.description | replace: '"', "'"}}“</p>
      </blockquote>
      {% if post.de.tags and post.de.tags.size > 0 %}
      <p>Schlüsselworte: {{ post.de.tags | join: ", " }}</p>
      {% endif %}
      <aside class="group"><a href="/studies_de_{{ post.group | downcase }}.html#{{ post.id }}"><div data-icon="ei-chevron-right" data-size="s"></div><p>{{ site.data.groups[post.group]['de_name'] }}</p></a></aside>
    </article>
