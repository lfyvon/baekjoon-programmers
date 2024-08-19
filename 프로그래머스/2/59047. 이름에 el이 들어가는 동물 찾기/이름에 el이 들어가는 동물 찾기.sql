-- 코드를 입력하세요
SELECT animal_id, name
  from ANIMAL_INS
 where lower(NAME) like '%el%'
   and ANIMAL_TYPE = 'Dog'
 order by name