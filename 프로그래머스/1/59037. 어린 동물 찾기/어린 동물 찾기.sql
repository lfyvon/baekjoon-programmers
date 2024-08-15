-- 코드를 입력하세요
SELECT animal_id, name
  from ANIMAL_INS
 where INTAKE_CONDITION != 'Aged'
order by ANIMAL_ID