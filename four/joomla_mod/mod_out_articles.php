<?php
/**
 * @package     Joomla.Site
 * @subpackage  mod_out_articles
 *
 * @copyright   Copyright (C) 2005 - 2016 Open Source Matters, Inc. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 */

defined('_JEXEC') or die;

// Получаем значения параметров модуля
$table_style = (int) $params->get('table_style');
$data_clock = (int) $params->get('data_clock');

//стиль
$rowStyle = '<style> div {color: white;} table {margin: auto;} td {border: 1px solid black;}</style>';


// Добавляем стили на страницу:
echo $rowStyle; 

//Получаем данные из БД:
// Берём ссылку на объект базы данных:
$db = JFactory::getDBO();
$query = $db->getQuery(true);
$query->select(array('#__menu.title', '#__menu.link', '#__menu.level', '#__extensions.name', '#__menu.menutype'));
$query->from(array('#__menu', '#__extensions', '#__menu_types'));
$query->setLimit('25');
$db->setQuery($query);
$results = $db->loadObjectList();


echo "<div>";
echo '<br><br><table border="1" style="text-align: center; color: white;">';
echo "<tr><td>Список всех пунктов меню</td><td>Ссылка</td><td>Уровень</td><td>Расширение</td> <td>Ра</td></tr>";
for($i=0;$i<count($results);$i++)
{
    if($table_style == 0)
    {
        //начало строки
        echo '<tr>';
    
        // Список всех пунктов меню
        echo '<td>';
        echo $results[$i]-> title;
        echo '</td>';
    
    
        // ссылка
        if($data_clock == 0)
        {
            echo '<td>';
            echo '<a href=', ($results[$i]->link),'>';
            echo ($results[$i]->link);
            echo '</a>';
            echo '</td>';
        }
        else if ($data_clock == 1) {
            echo '<td>';
            echo '<a href=', ($results[$i]->link),' target="_blank"', '>';
            echo ($results[$i]->link);
            echo '</a>';
            echo '</td>';
        }
    
        // Уровень
        echo '<td>';
        echo $results[$i]->level;
        echo '</td>';
        
        // Расширение
        echo '<td>';
        echo $results[$i]->name;
        echo '</td>';
        
        
        // Р
        echo '<td>';
        echo $results[$i]->menutype;
        echo '</td>';
        
        //конец строки
        echo '</tr>';
    }
    else if ($table_style == 1) {
       if ($results[$i]->menutype == 'main'){
           //начало строки
            echo '<tr>';
    
            // Список всех пунктов меню
            echo '<td>';
            echo $results[$i]-> title;
            echo '</td>';
    
    
            // ссылка
            if($data_clock == 0)
            {
                echo '<td>';
                echo '<a href=', ($results[$i]->link),'>';
                echo ($results[$i]->link);
                echo '</a>';
                echo '</td>';
            }
            else if ($data_clock == 1) {
                echo '<td>';
                echo '<a href=', ($results[$i]->link),' target="_blank"', '>';
                echo ($results[$i]->link);
                echo '</a>';
                echo '</td>';
            }
    
            // Уровень
            echo '<td>';
            echo $results[$i]->level;
            echo '</td>';
        
            // Расширение
            echo '<td>';
            echo $results[$i]->name;
            echo '</td>';
        
        
        // Р
        echo '<td>';
        echo $results[$i]->menutype;
        echo '</td>';
        
            //конец строки
            echo '</tr>';
       }
    }
    else if ($table_style == 2) {
        if ($results[$i]->menutype == "mainmenu"){
          //начало строки
            echo '<tr>';
    
            // Список всех пунктов меню
            echo '<td>';
            echo $results[$i]-> title;
            echo '</td>';
    
    
            // ссылка
            if($data_clock == 0)
            {
                echo '<td>';
                echo '<a href=', ($results[$i]->link),'>';
                echo ($results[$i]->link);
                echo '</a>';
                echo '</td>';
            }
            else if ($data_clock == 1) {
                echo '<td>';
                echo '<a href=', ($results[$i]->link),' target="_blank"', '>';
                echo ($results[$i]->link);
                echo '</a>';
                echo '</td>';
            }
    
            // Уровень
            echo '<td>';
            echo $results[$i]->level;
            echo '</td>';
        
            // Расширение
            echo '<td>';
            echo $results[$i]->name;
            echo '</td>';
        
        
        // Р
        echo '<td>';
        echo $results[$i]->menutype;
        echo '</td>';
        
            //конец строки
            echo '</tr>';
       }
    }
   
}
//закрытие таблицы
 echo '</table>';
 echo '</div>';
   
   
?>

