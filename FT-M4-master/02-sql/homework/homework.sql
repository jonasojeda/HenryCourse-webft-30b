
-- 1 - Birthyear
--Buscá todas las películas filmadas en el año que naciste.
select name, year from movies where year = 1998;
-- 2 -  1982
--Cuantas películas hay en la DB que sean del año 1982?
SELECT COUNT() FROM movies where year = 1982

-- 3 - Stacktors
--Buscá actores que tengan el substring stack en su apellido.
select * from actors where last_name like '%stack%';

-- 4 - Fame Name Game
--Buscá los 10 nombres y apellidos más populares entre los actores. Cuantos actores tienen cada uno de esos nombres y apellidos?

SELECT first_name, last_name, COUNT(*) as total
FROM actors
GROUP BY  LOWER(first_name),LOWER(first_name)
ORDER BY total DESC
LIMIT 10;

-- 5 - Prolific
--Listá el top 100 de actores más activos junto con el número de roles que haya realizado.
-- top 100 = limit 100

-- actors
--roles
SELECT a.first_name, a.last_name, r.role, COUNT(*) as total
from actors as a
JOIN roles as r
ON a.id = r.actor_id
GROUP BY a.id
ORDER BY total DESC
LIMIT 100;

-- 6 - Bottom of the Barrel
-- Cuantas películas tiene IMDB por género? Ordená la lista por el género menos popular.

SELECT genre, COUNT(*) as total
from movies_genres
GROUP BY genre
ORDER BY total ASC;

-- 7 - Braveheart
-- Listá el nombre y apellido de todos los actores que trabajaron en la película "Braveheart" de 1995, ordená la lista alfabéticamente por apellido

SELECT a.first_name, a.last_name, r.role
FROM actors AS a
JOIN roles as r on a.id = r.actor_id
join movies as m on r.movie_id = m.id
WHERE m.name = 'Braveheart' and m.year = 1995
order by a.last_name, a.first_name;

-- 8 - Leap Noir
--Listá todos los directores que dirigieron una película de género 'Film-Noir' en un año bisiesto (para reducir la complejidad, asumí que cualquier año divisible por cuatro es bisiesto). Tu consulta debería devolver el nombre del director, el nombre de la peli y el año. Todo ordenado por el nombre de la película.

SELECT d.first_name, d.last_name, m.name, m.year
FROM directors as d
join movies_directors as md on d.id = md.director_id
join movies as m on m.id = md.movie_id
join movies_genres as mg on m.id = mg.movie_id
where mg.genre = 'Film-Noir' and m.year % 4 = 0
order by m.name;


-- 9 - ° Bacon
--Listá todos los actores que hayan trabajado con Kevin Bacon en películas de Drama (incluí el título de la peli). Excluí al señor Bacon de los resultados.
select a.first_name, a.last_name
from actors as a
join roles as r on r.actor_id = a.id
join movies as m on m.id = r.movie_id
join movies_genres as mg on mg.movie_id = m.id
where mg.genre = 'Drama' and m.id in(
    select r.movie_id
    from roles as r
    JOIN actors as a on r.actor_id = a.id
    where first_name = 'Kevin' and last_name = 'Bacon'
)and(a.first_name || ' ' || a.last_name != 'Kevin Bacon');

-- 10 - Immortal Actors
--Qué actores actuaron en una película antes de 1900 y también en una película después del 2000?

select a.first_name, a.last_name, count(DISTINCT(r.role)) as total
from actors as a
join roles as r on a.id = r.actor_id
join movies as m on m.id = r.movie_id
where m.year > 1990
group by r.movie_id , r.actor_id
HAVING total > 5;

-- 10 - Busy Filming
-- Buscá actores que actuaron en cinco o más roles en la misma película después del año 1990. Noten que los ROLES pueden tener duplicados ocasionales, sobre los cuales no estamos interesados: queremos actores que hayan tenido cinco o más roles DISTINTOS (DISTINCT cough cough) en la misma película. Escribí un query que retorne los nombres del actor, el título de la película y el número de roles (siempre debería ser > 5).

select year, count(DISTINCT id)
from movies WHERE
id not in(
    select r.movie_id 
    from roles as r 
    join actors as a on r.actor_id = a.id
    where a.gender = 'M'
)
group by year;