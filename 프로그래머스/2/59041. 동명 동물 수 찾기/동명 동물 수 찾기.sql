-- 코드를 입력하세요
select name 
     , count(1) as count
  from animal_ins 
 where name is not null
 group by name
 having count(1) > 1
 order by name 
;