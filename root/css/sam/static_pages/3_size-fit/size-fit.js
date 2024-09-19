
window.addEventListener('load', function() {
    if (location.hash) location.href = location.hash;
});


$( document ).ready(function() {


    //H4 LIST
    let arrAllBrandH4 =
    [
        ['mcrae','McRae'],
        ['mechanix','Mechanix'],
        ['merrell','Merrell'],
        ['nike','NIKE'],
        ['nineline','Nine Line'],
        ['oakley','Oakley'],
        ['opscore','Ops Core'],
        ['originalswat','Original Swat'],
        ['otb','OTB'],
        ['outdoorresearch','Outdoor Research'],
        ['powersox','Powersox'],
        ['propper','Propper'],
        ['qalo','Qalo'],
        ['reebok','Reebook'],
        ['rockport','rockport'],
        ['rocky','rocky'],
        ['rothco','rothco'],
        ['salomon','salomon'],
        ['soffe','soffe'],
        ['specops','Spec Ops'],
        ['tacticalresearch','Tactical Research'],
        ['thorogood','thorogood'],
        ['timberlandpro','Timberland Pro'],
        ['truspec','Tru-Spec'],
        ['underarmour','Under Armour'],
        ['uspatriot','US Patriot'],
        ['vertx','vertx'],
        ['wileyx','WileyX'],
        ['xgo','xgo']
    ];
    if (document.getElementById('h4-more-brand')) {
        for (let i = 0; i < arrAllBrandH4.length; i++) {
            document.getElementById('h4-more-brand').innerHTML += "<h4><a href='#sf_" + arrAllBrandH4[i][0] + "'>" + arrAllBrandH4[i][1] + "</a></h4>";
        }
       
    }


    
    if (document.getElementById('size-fit-more-brand')) {


        //MCRAE
        document.getElementById('size-fit-more-brand').innerHTML += 
        '<div class="row sam-static-content-row sam-static-content-row-gray">'+
        '    <div class="col-12">'+
        '      <h2 id="sf_mcrae">McRAE BOOTS SIZE CHARTS</h2>'+
        '      <div>'+
        '      <div>'+
        '      <h3>Men\'s Footwear</h3>'+
        '      <div style="overflow-x:auto;"><table>'+
        '          <tbody>'+
        '              <tr>'+
        '                  <th>Size</th>'+
        '                  <th>6</th>'+
        '                  <th>6.5</th>'+
        '                  <th>7</th>'+
        '                  <th>7.5</th>'+
        '                  <th>8</th>'+
        '                  <th>8.5</th>'+
        '                  <th>9</th>'+
        '                  <th>9.5</th>'+
        '                  <th>10</th>'+
        '                  <th>10.5</th>'+
        '                  <th>11</th>'+
        '                  <th>11.5</th>'+
        '                  <th>12</th>'+
        '                  <th>12.5</th>'+
        '                  <th>13</th>'+
        '                  <th>13.5</th>'+
        '                  <th>14</th>'+
        '                  <th>15</th>'+
        '                  <th>16</th>'+
        '                  <th>17</th>'+
        '                  <th>18</th>'+
        '              </tr>'+
        '              <tr>'+
        '                  <th>Hell to Toe Length (in)</th>'+
        '                  <td>9 3/8</td>'+
        '                  <td>9 1/2</td>'+
        '                  <td>9 5/8</td>'+
        '                  <td>9 7/8</td>'+
        '                  <td>10</td>'+
        '                  <td>10 1/8</td>'+
        '                  <td>10 3/8</td>'+
        '                  <td>10 1/2</td>'+
        '                  <td>10 5/8</td>'+
        '                  <td>10 7/8</td>'+
        '                  <td>11</td>'+
        '                  <td>11 1/8</td>'+
        '                  <td>11 3/8</td>'+
        '                  <td>11 1/2</td>'+
        '                  <td>11 3/8</td>'+
        '                  <td>11 7/8</td>'+
        '                  <td>12</td>'+
        '                  <td>12 3/8</td>'+
        '                  <td>12 5/8</td>'+
        '                  <td>13</td>'+
        '                  <td>13 3/8</td>'+
        '              </tr>'+
        '              <tr>'+
        '                  <th>Heel to Toe Length (cm)</th>'+
        '                  <td>23 2/3</td>'+
        '                  <td>24 1/9</td>'+
        '                  <td>24 1/2</td>'+
        '                  <td>25</td>'+
        '                  <td>25 2/5</td>'+
        '                  <td>25 4/5</td>'+
        '                  <td>26 1/5</td>'+
        '                  <td>26 2/3</td>'+
        '                  <td>27 1/9</td>'+
        '                  <td>27 1/2</td>'+
        '                  <td>27 8/9</td>'+
        '                  <td>28 1/3</td>'+
        '                  <td>28 4/5</td>'+
        '                  <td>29 1/5</td>'+
        '                  <td>29 3/5</td>'+
        '                  <td>30</td>'+
        '                  <td>30 1/2</td>'+
        '                  <td>31 1/3</td>'+
        '                  <td>32 1/5</td>'+
        '                  <td>33</td>'+
        '                  <td>33 8/9</td>'+
        '              </tr>'+
        '          </tbody>'+
        '      </table></div>'+
        '      </div>'+
        '      <div>'+
        '      <p><br><strong>Hint:</strong> For the most accurate results, measure yourself in your undergarments.</p>'+
        '      <ul>'+
        '          <li><strong>Neck:</strong> Measure around the base of your neck, inserting your forefinger between the tape and your neck to allow ease in fit.</li>'+
        '          <li><strong>Chest:</strong> Measure around the fullest part of your chest, keeping tape firmly under your armpits and around your shoulder blades.</li>'+
        '          <li><strong>Waist:</strong> Measure around your waist, slightly below your natural waist, where you normally wear your pants. Insert your forefinger between the tape and your body to allow ease in fit.</li>'+
        '          <li><strong>Sleeve Length:</strong> Bend your arm slightly. Measure from center back neck, across your shoulder, down to your elbow, down to your wrist.</li>'+
        '          <li><strong>Hip:</strong> Measure around the fullest part of your hips, inserting your forefinger between the tape and your hip to allow ease in fit.</li>'+
        '          <li><strong>Inseam:</strong> Measure a similar pant that fits you well. Measure along the inseam, from the crotch seam to the bottom of the hem.</li>'+
        '          <li><strong>Gloves:</strong> Measure across palm of your hand from where your thumb and index finger meet.</li>'+
        '          <li><strong>Women\'s Boot Sizing:</strong> Military boots sized for women can be difficult to find. Below is a sizing chart on how to convert a men boot sizes to a women boot sizes.</li>'+
        '      </ul>'+
        '      <div style="overflow-x:auto;"><table>'+
        '          <tbody>'+
        '              <tr>'+
        '                  <td>'+
        '                  <p><strong>Men\'s</strong></p>'+
        '                  </td>'+
        '                  <td>'+
        '                  <p>4</p>'+
        '                  </td>'+
        '                  <td>'+
        '                  <p>4.5</p>'+
        '                  </td>'+
        '                  <td>'+
        '                  <p>5</p>'+
        '                  </td>'+
        '                  <td>'+
        '                  <p>5.5</p>'+
        '                  </td>'+
        '                  <td>'+
        '                  <p>6</p>'+
        '                  </td>'+
        '                  <td>'+
        '                  <p>6.5</p>'+
        '                  </td>'+
        '                  <td>'+
        '                  <p>7</p>'+
        '                  </td>'+
        '                  <td>'+
        '                  <p>7.5</p>'+
        '                  </td>'+
        '                  <td>'+
        '                  <p>8</p>'+
        '                  </td>'+
        '                  <td>'+
        '                  <p>8.5</p>'+
        '                  </td>'+
        '                  <td>'+
        '                  <p>9</p>'+
        '                  </td>'+
        '                  <td>'+
        '                  <p>9.5</p>'+
        '                  </td>'+
        '                  <td>'+
        '                  <p>10</p>'+
        '                  </td>'+
        '              </tr>'+
        '              <tr>'+
        '                  <td>'+
        '                  <p><strong>Women\'s</strong></p>'+
        '                  </td>'+
        '                  <td>'+
        '                  <p>6</p>'+
        '                  </td>'+
        '                  <td>'+
        '                  <p>6.5</p>'+
        '                  </td>'+
        '                  <td>'+
        '                  <p>7</p>'+
        '                  </td>'+
        '                  <td>'+
        '                  <p>7.5</p>'+
        '                  </td>'+
        '                  <td>'+
        '                  <p>8</p>'+
        '                  </td>'+
        '                  <td>'+
        '                  <p>8.5</p>'+
        '                  </td>'+
        '                  <td>'+
        '                  <p>9</p>'+
        '                  </td>'+
        '                  <td>'+
        '               <p>9.5</p>'+
        '                </td>'+
        '           <td>'+
        '                  <p>10</p>'+
        '                  </td>'+
        '                  <td>'+
        '                  <p>10.5</p>'+
        '                  </td>'+
        '                  <td>'+
        '                  <p>11</p>'+
        '                  </td>'+
        '                  <td>'+
        '                  <p>11.5</p>'+
        '                  </td>'+
        '                  <td>'+
        '                  <p>12</p>'+
        '                  </td>'+
        '              </tr>'+
        '          </tbody>'+
        '      </table></div>'+
        '      </div>'+
        '      </div>'+
        '    </div>'+
        '  </div>';
        //END


        //mechanix
        document.getElementById('size-fit-more-brand').innerHTML += 
        '<div class="row sam-static-content-row sam-static-content-row-gray">'+
        '<div class="col-12">'+

        '<h2 id="sf_mechanix">MECHANIX USA SIZE CHARTS</h2>'+
        '<h3>Glove Size</h3>'+
        '<div class="sizinginformation">'+
        '<div class="sizechart" id="belts">'+
        '<div style="overflow-x:auto;"><table>'+
        '    <tbody>'+
        '        <tr>'+
        '            <th>Size</th>'+
        '            <th>X-Small</th>'+
        '            <th>Small</th>'+
        '            <th>Medium</th>'+
        '            <th>Large</th>'+
        '            <th>X-Large</th>'+
        '            <th>2X-Large</th>'+
        '        </tr>'+
        '        <tr>'+
        '            <th>Finger Length (cm)</th>'+
        '            <td>11.5 - 12.3</td>'+
        '            <td>12.3 - 13</td>'+
        '            <td>13 - 13.8</td>'+
        '            <td>13.8 - 14.5</td>'+
        '            <td>14.5 - 15.2</td>'+
        '            <td>15.2 - 15.9</td>'+
        '        </tr>'+
        '        <tr>'+
        '            <th>Palm Width (cm)</th>'+
        '            <td>5.8 - 6.5</td>'+
        '            <td>6.5 - 7.5</td>'+
        '            <td>7.5 - 8.5</td>'+
        '            <td>8.5 - 9.8</td>'+
        '            <td>9.8 - 11</td>'+
        '            <td>11 - 12.2</td>'+
        '        </tr>'+
        '    </tbody>'+
        '</table></div>'+
        '</div>'+
        '<div>'+
        '<p><br><strong>Hint:</strong> For the most accurate results, measure yourself in your undergarments.</p>'+
        '<ul>'+
        '    <li><strong>Neck:</strong> Measure around the base of your neck, inserting your forefinger between the tape and your neck to allow ease in fit.</li>'+
        '    <li><strong>Chest:</strong> Measure around the fullest part of your chest, keeping tape firmly under your armpits and around your shoulder blades.</li>'+
        '    <li><strong>Waist:</strong> Measure around your waist, slightly below your natural waist, where you normally wear your pants. Insert your forefinger between the tape and your body to allow ease in fit.</li>'+
        '    <li><strong>Sleeve Length:</strong> Bend your arm slightly. Measure from center back neck, across your shoulder, down to your elbow, down to your wrist.</li>'+
        '    <li><strong>Hip:</strong> Measure around the fullest part of your hips, inserting your forefinger between the tape and your hip to allow ease in fit.</li>'+
        '    <li><strong>Inseam:</strong> Measure a similar pant that fits you well. Measure along the inseam, from the crotch seam to the bottom of the hem.</li>'+
        '    <li><strong>Gloves:</strong> Measure across palm of your hand from where your thumb and index finger meet.</li>'+
        '</ul>'+
        '</div>'+
        '</div>'+

        '</div>'+
        '</div>';
        //END 

   


        //merrel
        document.getElementById('size-fit-more-brand').innerHTML += 
        '<div class="row sam-static-content-row sam-static-content-row-gray">'+
        '<div class="col-12">'+

        '<h2 id="sf_merrell">MERRELL SIZE CHARTS</h2>'+
        '<h3>Men\'s Footwear</h3>'+
        '<div>'+
        '<div>'+
        '<div style="overflow-x:auto;"><table>'+
        '    <tbody>'+
        '        <tr>'+
        '            <th>Size</th>'+
        '            <th>&nbsp;</th>'+
        '            <th>&nbsp;</th>'+
        '            <th>&nbsp;</th>'+
        '            <th>&nbsp;</th>'+
        '            <th>&nbsp;</th>'+
        '            <th>&nbsp;</th>'+
        '            <th>&nbsp;</th>'+
        '            <th>&nbsp;</th>'+
        '            <th>&nbsp;</th>'+
        '            <th>&nbsp;</th>'+
        '            <th>&nbsp;</th>'+
        '            <th>&nbsp;</th>'+
        '            <th>&nbsp;</th>'+
        '            <th>&nbsp;</th>'+
        '            <th>&nbsp;</th>'+
        '        </tr>'+
        '        <tr>'+
        '            <th>USA</th>'+
        '            <td>7</td>'+
        '            <td>7.5</td>'+
        '            <td>8</td>'+
        '            <td>8.5</td>'+
        '            <td>9</td>'+
        '            <td>9.5</td>'+
        '            <td>10</td>'+
        '            <td>10.5</td>'+
        '            <td>11</td>'+
        '            <td>11.5</td>'+
        '            <td>12</td>'+
        '            <td>12.5</td>'+
        '            <td>13</td>'+
        '            <td>14</td>'+
        '            <td>15</td>'+
        '        </tr>'+
        '        <tr>'+
        '            <th>UK</th>'+
        '            <td>6.5</td>'+
        '            <td>7</td>'+
        '            <td>7.5</td>'+
        '            <td>8</td>'+
        '            <td>8.5</td>'+
        '            <td>9</td>'+
        '            <td>9.5</td>'+
        '            <td>10</td>'+
        '            <td>10.5</td>'+
        '            <td>11</td>'+
        '            <td>11.5</td>'+
        '            <td>12</td>'+
        '            <td>12.5</td>'+
        '            <td>13</td>'+
        '            <td>14</td>'+
        '        </tr>'+
        '        <tr>'+
        '            <th>EU</th>'+
        '            <td>40</td>'+
        '            <td>41</td>'+
        '            <td>41.5</td>'+
        '            <td>42</td>'+
        '            <td>43</td>'+
        '            <td>43.5</td>'+
        '            <td>44</td>'+
        '            <td>44.5</td>'+
        '            <td>45</td>'+
        '            <td>46</td>'+
        '            <td>46.5</td>'+
        '            <td>47</td>'+
        '            <td>48</td>'+
        '            <td>49</td>'+
        '            <td>50</td>'+
        '        </tr>'+
        '        <tr>'+
        '            <th>JPN</th>'+
        '            <td>25</td>'+
        '            <td>25.5</td>'+
        '            <td>26</td>'+
        '            <td>26.5</td>'+
        '            <td>27</td>'+
        '            <td>27.5</td>'+
        '            <td>28</td>'+
        '            <td>28.5</td>'+
        '            <td>29</td>'+
        '            <td>29.5</td>'+
        '            <td>30</td>'+
        '            <td>30.5</td>'+
        '            <td>31</td>'+
        '            <td>32</td>'+
        '            <td>33</td>'+
        '        </tr>'+
        '    </tbody>'+
        '</table></div>'+
        '</div>'+
        '<div>'+
        '<p><br><strong>Hint:</strong> For the most accurate results, measure yourself in your undergarments.</p>'+
        '<ul>'+
        '    <li><strong>Neck:</strong> Measure around the base of your neck, inserting your forefinger between the tape and your neck to allow ease in fit.</li>'+
        '    <li><strong>Chest:</strong> Measure around the fullest part of your chest, keeping tape firmly under your armpits and around your shoulder blades.</li>'+
        '    <li><strong>Waist:</strong> Measure around your waist, slightly below your natural waist, where you normally wear your pants. Insert your forefinger between the tape and your body to allow ease in fit.</li>'+
        '    <li><strong>Sleeve Length:</strong> Bend your arm slightly. Measure from center back neck, across your shoulder, down to your elbow, down to your wrist.</li>'+
        '    <li><strong>Hip:</strong> Measure around the fullest part of your hips, inserting your forefinger between the tape and your hip to allow ease in fit.</li>'+
        '    <li><strong>Inseam:</strong> Measure a similar pant that fits you well. Measure along the inseam, from the crotch seam to the bottom of the hem.</li>'+
        '    <li><strong>Gloves:</strong> Measure across palm of your hand from where your thumb and index finger meet.</li>'+
        '    <li><strong>Women\'s Boot Sizing:&nbsp;</strong> Military boots sized for women can be difficult to find. Below is a sizing chart on how to convert a men boot sizes to a women boot sizes.</li>'+
        '</ul>'+
        '<div style="overflow-x:auto;"><table>'+
        '    <tbody>'+
        '        <tr>'+
        '            <td>'+
        '            <p><strong>Men\'s</strong></p>'+
        '            </td>'+
        '            <td>'+
        '            <p>4</p>'+
        '            </td>'+
        '            <td>'+
        '            <p>4.5</p>'+
        '            </td>'+
        '            <td>'+
        '            <p>5</p>'+
        '            </td>'+
        '            <td>'+
        '            <p>5.5</p>'+
        '            </td>'+
        '            <td>'+
        '            <p>6</p>'+
        '            </td>'+
        '            <td>'+
        '            <p>6.5</p>'+
        '            </td>'+
        '            <td>'+
        '            <p>7</p>'+
        '            </td>'+
        '            <td>'+
        '            <p>7.5</p>'+
        '            </td>'+
        '            <td>'+
        '            <p>8</p>'+
        '            </td>'+
        '            <td>'+
        '            <p>8.5</p>'+
        '            </td>'+
        '            <td>'+
        '            <p>9</p>'+
        '            </td>'+
        '            <td>'+
        '            <p>9.5</p>'+
        '            </td>'+
        '            <td>'+
        '            <p>10</p>'+
        '            </td>'+
        '        </tr>'+
        '        <tr>'+
        '            <td>'+
        '            <p><strong>Women\'s</strong></p>'+
        '            </td>'+
        '            <td>'+
        '            <p>6</p>'+
        '            </td>'+
        '            <td>'+
        '            <p>6.5</p>'+
        '            </td>'+
        '            <td>'+
        '            <p>7</p>'+
        '            </td>'+
        '            <td>'+
        '            <p>7.5</p>'+
        '            </td>'+
        '            <td>'+
        '            <p>8</p>'+
        '            </td>'+
        '            <td>'+
        '            <p>8.5</p>'+
        '            </td>'+
        '            <td>'+
        '            <p>9</p>'+
        '            </td>'+
        '            <td>'+
        '            <p>9.5</p>'+
        '            </td>'+
        '            <td>'+
        '            <p>10</p>'+
        '            </td>'+
        '            <td>'+
        '            <p>10.5</p>'+
        '            </td>'+
        '            <td>'+
        '            <p>11</p>'+
        '            </td>'+
        '            <td>'+
        '            <p>11.5</p>'+
        '            </td>'+
        '            <td>'+
        '            <p>12</p>'+
        '            </td>'+
        '        </tr>'+
        '    </tbody>'+
        '</table></div>'+
        '</div>'+
        '</div>'+

        '</div>'+
        '</div>';
        //END





        //nike
        document.getElementById('size-fit-more-brand').innerHTML += 
        '<div class="row sam-static-content-row sam-static-content-row-gray">'+
        '<div class="col-12">'+

        '<h2 id="sf_nike">NIKE SIZE CHARTS</h2>'+
        '<div>'+
        '<div>'+
        '<h3>Men\'s Footwear</h3>'+
        '<div style="overflow-x:auto;"><table>'+
        '	<tbody>'+
        '		<tr>'+
        '			<th>Size</th>'+
        '			<th>6</th>'+
        '			<th>6.5</th>'+
        '			<th>7</th>'+
        '			<th>7.5</th>'+
        '			<th>8</th>'+
        '			<th>8.5</th>'+
        '			<th>9</th>'+
        '			<th>9.5</th>'+
        '			<th>10</th>'+
        '			<th>10.5</th>'+
        '			<th>11</th>'+
        '			<th>11.5</th>'+
        '			<th>12</th>'+
        '			<th>13</th>'+
        '			<th>14</th>'+
        '			<th>15</th>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Heel to Toe Length (in)</th>'+
        '			<td>9 3/8</td>'+
        '			<td>9 1/2</td>'+
        '			<td>9 5/8</td>'+
        '			<td>9 7/8</td>'+
        '			<td>10</td>'+
        '			<td>10 1/8</td>'+
        '			<td>10 3/8</td>'+
        '			<td>10 1/2</td>'+
        '			<td>10 5/8</td>'+
        '			<td>10 7/8</td>'+
        '			<td>11</td>'+
        '			<td>11 1/8</td>'+
        '			<td>11 3/8</td>'+
        '			<td>11 5/8</td>'+
        '			<td>12</td>'+
        '			<td>12 3/8</td>'+
        '		</tr>'+
        '	</tbody>'+
        '</table></div>'+
        '</div>'+
        '<div>'+
        '<<p><br><strong>Hint:</strong>> For the most accurate results, measure yourself in your undergarments.</p>'+
        '<ul>'+
        '	<li><strong>Neck:</strong> Measure around the base of your neck, inserting your forefinger between the tape and your neck to allow ease in fit.</li>'+
        '	<li><strong>Chest:</strong> Measure around the fullest part of your chest, keeping tape firmly under your armpits and around your shoulder blades.</li>'+
        '	<li><strong>Waist:</strong> Measure around your waist, slightly below your natural waist, where you normally wear your pants. Insert your forefinger between the tape and your body to allow ease in fit.</li>'+
        '	<li><strong>Sleeve Length:</strong> Bend your arm slightly. Measure from center back neck, across your shoulder, down to your elbow, down to your wrist.</li>'+
        '	<li><strong>Hip:</strong> Measure around the fullest part of your hips, inserting your forefinger between the tape and your hip to allow ease in fit.</li>'+
        '	<li><strong>Inseam:</strong> Measure a similar pant that fits you well. Measure along the inseam, from the crotch seam to the bottom of the hem.</li>'+
        '	<li><strong>Gloves:</strong> Measure across palm of your hand from where your thumb and index finger meet.</li>'+
        '	<li><strong>Women\'s Boot Sizing:&nbsp;</strong> Military boots sized for women can be difficult to find. Below is a sizing chart on how to convert a men boot sizes to a women boot sizes.</li>'+
        '</ul>'+
        '<div style="overflow-x:auto;"><table>'+
        '	<tbody>'+
        '		<tr>'+
        '			<td>'+
        '			<p><strong>Men\'s</strong></p>'+
        '			</td>'+
        '			<td>'+
        '			<p>4</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>4.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>5.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>6</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>6.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>7</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>7.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>8</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>8.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>9</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>9.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>10</p>'+
        '			</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<td>'+
        '			<p><strong>Women\'s</strong></p>'+
        '			</td>'+
        '			<td>'+
        '			<p>6</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>6.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>7</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>7.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>8</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>8.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>9</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>9.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>10</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>10.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>11</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>11.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>12</p>'+
        '			</td>'+
        '		</tr>'+
        '	</tbody>'+
        '</table></div>'+
        '</div>'+
        '</div>'+
        
        '</div>'+
        '</div>';
        //END







        //Nine Line
        document.getElementById('size-fit-more-brand').innerHTML += 
        '<div class="row sam-static-content-row sam-static-content-row-gray">'+
        '<div class="col-12">'+

        '<h2 id="sf_nineline">NINE LINE APPAREL SIZE CHARTS</h2>'+
        '<h3>T-Shirt Size</h3>'+
        '<div>'+
        '<div>'+
        '<div style="overflow-x:auto;"><table>'+
        '	<tbody>'+
        '		<tr>'+
        '			<th>Size</th>'+
        '			<th>Small</th>'+
        '			<th>Medium</th>'+
        '			<th>Large</th>'+
        '			<th>X-Large</th>'+
        '			<th>2X-Large</th>'+
        '			<th>3X-Large</th>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Chest</th>'+
        '			<td>38</td>'+
        '			<td>41</td>'+
        '			<td>44</td>'+
        '			<td>48</td>'+
        '			<td>52</td>'+
        '			<td>56</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Body Length</th>'+
        '			<td>28</td>'+
        '			<td>29</td>'+
        '			<td>30</td>'+
        '			<td>31</td>'+
        '			<td>32</td>'+
        '			<td>33</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Sleeve Length</th>'+
        '			<td>8</td>'+
        '			<td>8.5</td>'+
        '			<td>9</td>'+
        '			<td>9.5</td>'+
        '			<td>10</td>'+
        '			<td>10.5</td>'+
        '		</tr>'+
        '	</tbody>'+
        '</table></div>'+
        '</div>'+
        '<div>'+
        '<p><br><strong>Hint:</strong> For the most accurate results, measure yourself in your undergarments.</p>'+
        '<ul>'+
        '	<li><strong>Neck:</strong> Measure around the base of your neck, inserting your forefinger between the tape and your neck to allow ease in fit.</li>'+
        '	<li><strong>Chest:</strong> Measure around the fullest part of your chest, keeping tape firmly under your armpits and around your shoulder blades.</li>'+
        '	<li><strong>Waist:</strong> Measure around your waist, slightly below your natural waist, where you normally wear your pants. Insert your forefinger between the tape and your body to allow ease in fit.</li>'+
        '	<li><strong>Sleeve Length:</strong> Bend your arm slightly. Measure from center back neck, across your shoulder, down to your elbow, down to your wrist.</li>'+
        '	<li><strong>Hip:</strong> Measure around the fullest part of your hips, inserting your forefinger between the tape and your hip to allow ease in fit.</li>'+
        '	<li><strong>Inseam:</strong> Measure a similar pant that fits you well. Measure along the inseam, from the crotch seam to the bottom of the hem.</li>'+
        '	<li><strong>Gloves:</strong> Measure across palm of your hand from where your thumb and index finger meet.</li>'+
        '</ul>'+
        '</div>'+
        '</div>'+

        '</div>'+
        '</div>';
        //END








        //Oakley
        document.getElementById('size-fit-more-brand').innerHTML += 
        '<div class="row sam-static-content-row sam-static-content-row-gray">'+
        '<div class="col-12">'+

        '<h2 id="sf_oakley">OAKLEY SIZE CHARTS</h2>'+
        '<ul>'+
        '	<li><a href="#TacticalBeltsOakley">Tactical Belts</a></li>'+
        '	<li><a href="#TacticalGlovesOakley">Tactical Gloves</a></li>'+
        '	<li><a href="#HeadwearOakley">Stretch Caps</a></li>'+
        '	<li><a href="#MenFootwearOakley">Men\'s Footwear</a></li>'+
        '	<li><a href="#MenApparelOakley">Men\'s Apparel</a></li>'+
        '	<li><a href="#SocksOakley">Socks</a></li>'+
        '</ul>'+
        '<div>'+
        '<div>'+
        '<h3 id="TacticalBeltsOakley">Belt Size</h3>'+
        '<div style="overflow-x:auto;"><table>'+
        '	<tbody>'+
        '		<tr>'+
        '			<th>Size</th>'+
        '			<th>X-Small</th>'+
        '			<th>Small</th>'+
        '			<th>Medium</th>'+
        '			<th>Large</th>'+
        '			<th>X-Large</th>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Waist</th>'+
        '			<td>30</td>'+
        '			<td>32</td>'+
        '			<td>34</td>'+
        '			<td>36</td>'+
        '			<td>38</td>'+
        '		</tr>'+
        '	</tbody>'+
        '</table></div>'+
        '</div>'+
        '<div>'+
        '<h3 id="TacticalGlovesOakley">Glove Size</h3>'+
        '<div style="overflow-x:auto;"><table>'+
        '	<tbody>'+
        '		<tr>'+
        '			<th>Size</th>'+
        '			<th>X-Small</th>'+
        '			<th>Small</th>'+
        '			<th>Medium</th>'+
        '			<th>Large</th>'+
        '			<th>X-Large</th>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Measurement</th>'+
        '			<td>5.5 - 6.5</td>'+
        '			<td>6.5 - 7.5</td>'+
        '			<td>7.5 - 8.5</td>'+
        '			<td>8.5 - 9.5</td>'+
        '			<td>10.5+</td>'+
        '		</tr>'+
        '	</tbody>'+
        '</table></div>'+
        '</div>'+
        '<h3 id="HeadwearOakley">Streatch Cap Size</h3>'+
        '<div style="overflow-x:auto;"><table>'+
        '	<tbody>'+
        '		<tr>'+
        '			<th>Size</th>'+
        '			<th>S/M</th>'+
        '			<th>L/XL</th>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Measurement</th>'+
        '			<td>6 7/8 - 7 1/8</td>'+
        '			<td>7 3/8 - 7 5/8</td>'+
        '		</tr>'+
        '	</tbody>'+
        '</table></div>'+
        '</div>'+
        '<div>'+
        '<h3 id="MenFootwearOakley">Men\'s Footwear</h3>'+
        '<div style="overflow-x:auto;"><table>'+
        '	<tbody>'+
        '		<tr>'+
        '			<th>Size</th>'+
        '			<th> &nbsp;&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>USA</th>'+
        '			<td>'+
        '			<p>4</p>'+
        '			</td>'+
        '			<td>4.5</td>'+
        '			<td>5</td>'+
        '			<td>5.5</td>'+
        '			<td>6</td>'+
        '			<td>6.5</td>'+
        '			<td>7</td>'+
        '			<td>7.5</td>'+
        '			<td>8</td>'+
        '			<td>8.5</td>'+
        '			<td>9</td>'+
        '			<td>9.5</td>'+
        '			<td>10</td>'+
        '			<td>10.5</td>'+
        '			<td>11</td>'+
        '			<td>11.5</td>'+
        '			<td>12</td>'+
        '			<td>12.5</td>'+
        '			<td>13</td>'+
        '			<td>14</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>UK</th>'+
        '			<td>3</td>'+
        '			<td>3.5</td>'+
        '			<td>4</td>'+
        '			<td>4.5</td>'+
        '			<td>5</td>'+
        '			<td>5.5</td>'+
        '			<td>6</td>'+
        '			<td>6.5</td>'+
        '			<td>7</td>'+
        '			<td>7.5</td>'+
        '			<td>8</td>'+
        '			<td>8.5</td>'+
        '			<td>9</td>'+
        '			<td>9.5</td>'+
        '			<td>10</td>'+
        '			<td>10.5</td>'+
        '			<td>11</td>'+
        '			<td>11.5</td>'+
        '			<td>12</td>'+
        '			<td>13</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>EU</th>'+
        '			<td>36</td>'+
        '			<td>36.5</td>'+
        '			<td>37.5</td>'+
        '			<td>38</td>'+
        '			<td>38.5</td>'+
        '			<td>39</td>'+
        '			<td>40</td>'+
        '			<td>40.5</td>'+
        '			<td>41</td>'+
        '			<td>42</td>'+
        '			<td>42.5</td>'+
        '			<td>43</td>'+
        '			<td>44</td>'+
        '			<td>44.5</td>'+
        '			<td>45</td>'+
        '			<td>45.5</td>'+
        '			<td>46</td>'+
        '			<td>46.5</td>'+
        '			<td>47</td>'+
        '			<td>48</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>JPN</th>'+
        '			<td>22</td>'+
        '			<td>22.5</td>'+
        '			<td>23</td>'+
        '			<td>23.5</td>'+
        '			<td>24</td>'+
        '			<td>24.5</td>'+
        '			<td>25</td>'+
        '			<td>25.5</td>'+
        '			<td>26</td>'+
        '			<td>26.5</td>'+
        '			<td>27</td>'+
        '			<td>27.5</td>'+
        '			<td>28</td>'+
        '			<td>28.5</td>'+
        '			<td>29</td>'+
        '			<td>29.5</td>'+
        '			<td>30</td>'+
        '			<td>30.5</td>'+
        '			<td>31</td>'+
        '			<td>32</td>'+
        '		</tr>'+
        '	</tbody>'+
        '</table></div>'+
        '</div>'+
        '<div>'+
        '<h3 id="MenApparelOakley">Men\'s Apparel</h3>'+
        '<div style="overflow-x:auto;"><table>'+
        '	<tbody>'+
        '		<tr>'+
        '			<th>Size</th>'+
        '			<th>X-Small</th>'+
        '			<th>Small</th>'+
        '			<th>Medium</th>'+
        '			<th>Large</th>'+
        '			<th>X-Large</th>'+
        '			<th>2X-Large</th>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Chest</th>'+
        '			<td>36 - 37</td>'+
        '			<td>38 - 39</td>'+
        '			<td>40 - 41</td>'+
        '			<td>42 - 44</td>'+
        '			<td>45 - 47</td>'+
        '			<td>48 - 51</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Waist</th>'+
        '			<td>28 - 29</td>'+
        '			<td>30 - 31</td>'+
        '			<td>32 - 33</td>'+
        '			<td>34 - 35</td>'+
        '			<td>36 - 38</td>'+
        '			<td>39 - 42</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Hip</th>'+
        '			<td>35 - 36</td>'+
        '			<td>37 - 38</td>'+
        '			<td>39 - 40</td>'+
        '			<td>41 - 42</td>'+
        '			<td>42 - 44</td>'+
        '			<td>45 - 46</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Sleeve</th>'+
        '			<td>33</td>'+
        '			<td>33.5</td>'+
        '			<td>34</td>'+
        '			<td>34.75</td>'+
        '			<td>35.5</td>'+
        '			<td>36.25</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Inseam</th>'+
        '			<td>31.5</td>'+
        '			<td>32</td>'+
        '			<td>32</td>'+
        '			<td>32.5</td>'+
        '			<td>32.5</td>'+
        '			<td>33</td>'+
        '		</tr>'+
        '	</tbody>'+
        '</table></div>'+
        '</div>'+
        '<div>'+
        '<h3 id="SocksOakley">Socks Size</h3>'+
        '<div style="overflow-x:auto;"><table>'+
        '	<tbody>'+
        '		<tr>'+
        '			<th>Size</th>'+
        '			<th>Medium</th>'+
        '			<th>Large</th>'+
        '			<th>X-Large</th>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Sock</th>'+
        '			<td>9 - 11</td>'+
        '			<td>10 - 13</td>'+
        '			<td>13 - 15</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Boot</th>'+
        '			<td>7 - 9</td>'+
        '			<td>8.5 - 12</td>'+
        '			<td>12.5 - 16</td>'+
        '		</tr>'+
        '	</tbody>'+
        '</table></div>'+
        '</div>'+
        '<div>'+
        '<p><br><strong>Hint:</strong> For the most accurate results, measure yourself in your undergarments.</p>'+
        '<ul>'+
        '	<li><strong>Neck:</strong> Measure around the base of your neck, inserting your forefinger between the tape and your neck to allow ease in fit.</li>'+
        '	<li><strong>Chest:</strong> Measure around the fullest part of your chest, keeping tape firmly under your armpits and around your shoulder blades.</li>'+
        '	<li><strong>Waist:</strong> Measure around your waist, slightly below your natural waist, where you normally wear your pants. Insert your forefinger between the tape and your body to allow ease in fit.</li>'+
        '	<li><strong>Sleeve Length:</strong> Bend your arm slightly. Measure from center back neck, across your shoulder, down to your elbow, down to your wrist.</li>'+
        '	<li><strong>Hip:</strong> Measure around the fullest part of your hips, inserting your forefinger between the tape and your hip to allow ease in fit.</li>'+
        '	<li><strong>Inseam:</strong> Measure a similar pant that fits you well. Measure along the inseam, from the crotch seam to the bottom of the hem.</li>'+
        '	<li><strong>Gloves:</strong> Measure across palm of your hand from where your thumb and index finger meet.</li>'+
        '	<li><strong>Women\'s Boot Sizing:&nbsp;</strong> Military boots sized for women can be difficult to find. Below is a sizing chart on how to convert a men boot sizes to a women boot sizes.</li>'+
        '</ul>'+
        '<div style="overflow-x:auto;"><table border="0" cellpadding="1" cellspacing="1">'+
        '	<tbody>'+
        '		<tr>'+
        '			<td>'+
        '			<p><strong>Men\'s</strong></p>'+
        '			</td>'+
        '			<td>'+
        '			<p>4</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>4.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>5.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>6</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>6.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>7</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>7.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>8</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>8.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>9</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>9.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>10</p>'+
        '			</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<td>'+
        '			<p><strong>Women\'s</strong></p>'+
        '			</td>'+
        '			<td>'+
        '			<p>6</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>6.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>7</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>7.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>8</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>8.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>9</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>9.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>10</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>10.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>11</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>11.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>12</p>'+
        '			</td>'+
        '		</tr>'+
        '	</tbody>'+
        '</table></div>'+
        '</div>'+
        '</div>'+

        '</div>'+
        '</div>';
        //END





        //OPS CORE
        document.getElementById('size-fit-more-brand').innerHTML += 
        '<div class="row sam-static-content-row sam-static-content-row-gray">'+
        '<div class="col-12">'+

        '<h2 id="sf_opscore">OPS CORE SIZE CHARTS</h2>'+
        '<ul>'+
        '	<li><a href="#HelmetOPSin">Helmet Sizing (in)</a></li>'+
        '	<li><a href="#HelmetOPScm">Helmet Sizing (cm)</a></li>'+
        '	<li><a href="#HelmetOPSChin">Fast Helmet Chinstrap Sizing</a></li>'+
        '</ul>'+
        '<div>'+
        '<div>'+
        '<h3 id="HelmetOPSin">Helmet Size (in)</h3>'+
        '<div style="overflow-x:auto;"><table>'+
        '	<tbody>'+
        '		<tr>'+
        '			<th>Size</th>'+
        '			<th>Medium</th>'+
        '			<th>Large</th>'+
        '			<th>X-Large</th>'+
        '			<th>2X-Large</th>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Head Circumference</th>'+
        '			<td>20 7/8 - 22</td>'+
        '			<td>22 - 23 1/4</td>'+
        '			<td>23 1/4 - 24 3/8</td>'+
        '			<td>24 3/8 - 25 3/8</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Head Size (US)</th>'+
        '			<td>Up to 7</td>'+
        '			<td>Up to 7 3/8</td>'+
        '			<td>Up to 7 5/8</td>'+
        '			<td>Up to 8 1/8</td>'+
        '		</tr>'+
        '	</tbody>'+
        '</table></div>'+
        '</div>'+
        '<div>'+
        '<h3 id="HelmetOPScm">Helmet Size (cm)</h3>'+
        '<div style="overflow-x:auto;"><table>'+
        '	<tbody>'+
        '		<tr>'+
        '			<th>Size</th>'+
        '			<th>Medium</th>'+
        '			<th>Large</th>'+
        '			<th>X-Large</th>'+
        '			<th>2X-Large</th>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Head Circumference</th>'+
        '			<td>53 - 56</td>'+
        '			<td>56 - 59</td>'+
        '			<td>59 - 62</td>'+
        '			<td>62 - 64 1/2</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Head Size (US)</th>'+
        '			<td>Up to 7</td>'+
        '			<td>Up to 7 3/8</td>'+
        '			<td>Up to 7 5/8</td>'+
        '			<td>Up to 8 1/8</td>'+
        '		</tr>'+
        '	</tbody>'+
        '</table></div>'+
        '</div>'+
        '<div>'+
        '<h3 id="HelmetOPSChin">Fast Helmet Chinstrap Size</h3>'+
        '<div style="overflow-x:auto;"><table>'+
        '	<tbody>'+
        '		<tr>'+
        '			<th>Fast Helmet Size</th>'+
        '			<th>Medium</th>'+
        '			<th>Large</th>'+
        '			<th>X-Large</th>'+
        '			<th>2X-Large</th>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Chin Strap Size</th>'+
        '			<td>24 1/2 - 27 1/2</td>'+
        '			<td>26 - 29</td>'+
        '			<td>27 1/2 - 31</td>'+
        '			<td>27 1/2 - 31</td>'+
        '		</tr>'+
        '	</tbody>'+
        '</table></div>'+
        '</div>'+
        '<div>'+
        '<p><br><strong>Hint:</strong> For the most accurate results, measure yourself in your undergarments.</p>'+
        '<ul>'+
        '	<li><strong>Neck:</strong> Measure around the base of your neck, inserting your forefinger between the tape and your neck to allow ease in fit.</li>'+
        '	<li><strong>Chest:</strong> Measure around the fullest part of your chest, keeping tape firmly under your armpits and around your shoulder blades.</li>'+
        '	<li><strong>Waist:</strong> Measure around your waist, slightly below your natural waist, where you normally wear your pants. Insert your forefinger between the tape and your body to allow ease in fit.</li>'+
        '	<li><strong>Sleeve Length:</strong> Bend your arm slightly. Measure from center back neck, across your shoulder, down to your elbow, down to your wrist.</li>'+
        '	<li><strong>Hip:</strong> Measure around the fullest part of your hips, inserting your forefinger between the tape and your hip to allow ease in fit.</li>'+
        '	<li><strong>Inseam:</strong> Measure a similar pant that fits you well. Measure along the inseam, from the crotch seam to the bottom of the hem.</li>'+
        '	<li><strong>Gloves:</strong> Measure across palm of your hand from where your thumb and index finger meet.</li>'+
        '</ul>'+
        '</div>'+
        '</div>'+

        '</div>'+
        '</div>';
        //END





        //ORIGINAL SWAT
        document.getElementById('size-fit-more-brand').innerHTML += 
        '<div class="row sam-static-content-row sam-static-content-row-gray">'+
        '<div class="col-12">'+

        '<h2 id="sf_originalswat">ORIGINAL SWAT SIZE CHARTS</h2>'+
        '<div>'+
        '<div>'+
        '<h3>Footwear</h3>'+
        '<div style="overflow-x:auto;"><table>'+
        '	<tbody>'+
        '		<tr>'+
        '			<th>Size</th>'+
        '			<th> &nbsp;&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Men\'s</th>'+
        '			<td>5</td>'+
        '			<td>5.5</td>'+
        '			<td>6</td>'+
        '			<td>6.5</td>'+
        '			<td>7</td>'+
        '			<td>7.5</td>'+
        '			<td>8</td>'+
        '			<td>8.5</td>'+
        '			<td>9</td>'+
        '			<td>9.5</td>'+
        '			<td>10</td>'+
        '			<td>10.5</td>'+
        '			<td>11</td>'+
        '			<td>11.5</td>'+
        '			<td>12</td>'+
        '			<td>12.5</td>'+
        '			<td>13</td>'+
        '			<td>14</td>'+
        '			<td>15</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Women\'s</th>'+
        '			<td>6.5</td>'+
        '			<td>7</td>'+
        '			<td>7.5</td>'+
        '			<td>8</td>'+
        '			<td>8.5</td>'+
        '			<td>9</td>'+
        '			<td>9.5</td>'+
        '			<td>10</td>'+
        '			<td>10.5</td>'+
        '			<td>11</td>'+
        '			<td>11.5</td>'+
        '			<td>12</td>'+
        '			<td>12.5</td>'+
        '			<td>13</td>'+
        '			<td>- -</td>'+
        '			<td>- -</td>'+
        '			<td>- -</td>'+
        '			<td>- -</td>'+
        '			<td>- -</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>UK</th>'+
        '			<td>4</td>'+
        '			<td>4.5</td>'+
        '			<td>5</td>'+
        '			<td>5.5</td>'+
        '			<td>6</td>'+
        '			<td>6.5</td>'+
        '			<td>7</td>'+
        '			<td>7.5</td>'+
        '			<td>8</td>'+
        '			<td>8.5</td>'+
        '			<td>9</td>'+
        '			<td>9.5</td>'+
        '			<td>10</td>'+
        '			<td>10.5</td>'+
        '			<td>11</td>'+
        '			<td>11.5</td>'+
        '			<td>12</td>'+
        '			<td>13</td>'+
        '			<td>14</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>EU</th>'+
        '			<td>36.5</td>'+
        '			<td>37</td>'+
        '			<td>38</td>'+
        '			<td>38.5</td>'+
        '			<td>39</td>'+
        '			<td>40</td>'+
        '			<td>40.5</td>'+
        '			<td>41</td>'+
        '			<td>42</td>'+
        '			<td>42.5</td>'+
        '			<td>43</td>'+
        '			<td>44</td>'+
        '			<td>44.5</td>'+
        '			<td>45</td>'+
        '			<td>46</td>'+
        '			<td>46.5</td>'+
        '			<td>46.5</td>'+
        '			<td>48</td>'+
        '			<td>49</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>JPN</th>'+
        '			<td>23</td>'+
        '			<td>23.5</td>'+
        '			<td>24</td>'+
        '			<td>24.5</td>'+
        '			<td>25</td>'+
        '			<td>25.5</td>'+
        '			<td>26</td>'+
        '			<td>26.5</td>'+
        '			<td>27</td>'+
        '			<td>27.5</td>'+
        '			<td>28</td>'+
        '			<td>28.5</td>'+
        '			<td>29</td>'+
        '			<td>29.5</td>'+
        '			<td>30</td>'+
        '			<td>30.5</td>'+
        '			<td>30.5</td>'+
        '			<td>32</td>'+
        '			<td>33</td>'+
        '		</tr>'+
        '	</tbody>'+
        '</table></div>'+
        '</div>'+
        '<div>'+
        '<p><br><strong>Hint:</strong> For the most accurate results, measure yourself in your undergarments.</p>'+
        '<ul>'+
        '	<li><strong>Neck:</strong> Measure around the base of your neck, inserting your forefinger between the tape and your neck to allow ease in fit.</li>'+
        '	<li><strong>Chest:</strong> Measure around the fullest part of your chest, keeping tape firmly under your armpits and around your shoulder blades.</li>'+
        '	<li><strong>Waist:</strong> Measure around your waist, slightly below your natural waist, where you normally wear your pants. Insert your forefinger between the tape and your body to allow ease in fit.</li>'+
        '	<li><strong>Sleeve Length:</strong> Bend your arm slightly. Measure from center back neck, across your shoulder, down to your elbow, down to your wrist.</li>'+
        '	<li><strong>Hip:</strong> Measure around the fullest part of your hips, inserting your forefinger between the tape and your hip to allow ease in fit.</li>'+
        '	<li><strong>Inseam:</strong> Measure a similar pant that fits you well. Measure along the inseam, from the crotch seam to the bottom of the hem.</li>'+
        '	<li><strong>Gloves:</strong> Measure across palm of your hand from where your thumb and index finger meet.</li>'+
        '	<li><strong>Women\'s Boot Sizing:&nbsp;</strong> Military boots sized for women can be difficult to find. Below is a sizing chart on how to convert a men boot sizes to a women boot sizes.</li>'+
        '</ul>'+
        '<div style="overflow-x:auto;"><table border="0" cellpadding="1" cellspacing="1">'+
        '	<tbody>'+
        '		<tr>'+
        '			<td>'+
        '			<p><strong>Men\'s</strong></p>'+
        '			</td>'+
        '			<td>'+
        '			<p>4</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>4.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>5.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>6</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>6.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>7</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>7.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>8</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>8.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>9</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>9.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>10</p>'+
        '			</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<td>'+
        '			<p><strong>Women\'s</strong></p>'+
        '			</td>'+
        '			<td>'+
        '			<p>6</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>6.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>7</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>7.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>8</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>8.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>9</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>9.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>10</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>10.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>11</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>11.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>12</p>'+
        '			</td>'+
        '		</tr>'+
        '	</tbody>'+
        '</table></div>'+
        '</div>'+
        '</div>'+
 
        '</div>'+
        '</div>';
        //END







        //OTB
        document.getElementById('size-fit-more-brand').innerHTML += 
        '<div class="row sam-static-content-row sam-static-content-row-gray">'+
        '<div class="col-12">'+

        '<h2 id="sf_otb">OTB BOOTS SIZE CHARTS</h2>'+
        '<div>'+
        '<div>'+
        '<h3>Men\'s Footwear</h3>'+
        '<div style="overflow-x:auto;"><table>'+
        '	<tbody>'+
        '		<tr>'+
        '			<th>Size</th>'+
        '			<th> &nbsp;&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>USA</th>'+
        '			<td>5</td>'+
        '			<td>5.5</td>'+
        '			<td>6</td>'+
        '			<td>6.5</td>'+
        '			<td>7</td>'+
        '			<td>7.5</td>'+
        '			<td>8</td>'+
        '			<td>8.5</td>'+
        '			<td>9</td>'+
        '			<td>9.5</td>'+
        '			<td>10</td>'+
        '			<td>10.5</td>'+
        '			<td>11</td>'+
        '			<td>11.5</td>'+
        '			<td>12</td>'+
        '			<td>12.5</td>'+
        '			<td>13</td>'+
        '			<td>14</td>'+
        '			<td>15</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>UK</th>'+
        '			<td>4</td>'+
        '			<td>4.5</td>'+
        '			<td>5</td>'+
        '			<td>5.5</td>'+
        '			<td>6</td>'+
        '			<td>6.5</td>'+
        '			<td>7</td>'+
        '			<td>7.5</td>'+
        '			<td>8</td>'+
        '			<td>8.5</td>'+
        '			<td>9</td>'+
        '			<td>9.5</td>'+
        '			<td>10</td>'+
        '			<td>10.5</td>'+
        '			<td>11</td>'+
        '			<td>11.5</td>'+
        '			<td>12</td>'+
        '			<td>13</td>'+
        '			<td>14</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>EU</th>'+
        '			<td>37</td>'+
        '			<td>37.5</td>'+
        '			<td>38</td>'+
        '			<td>39</td>'+
        '			<td>39.5</td>'+
        '			<td>40</td>'+
        '			<td>40.5</td>'+
        '			<td>41</td>'+
        '			<td>41.5</td>'+
        '			<td>42</td>'+
        '			<td>42.5</td>'+
        '			<td>43</td>'+
        '			<td>43.5</td>'+
        '			<td>44</td>'+
        '			<td>44.5</td>'+
        '			<td>45</td>'+
        '			<td>46</td>'+
        '			<td>47</td>'+
        '			<td>48</td>'+
        '		</tr>'+
        '	</tbody>'+
        '</table></div>'+
        '</div>'+
        '<div>'+
        '<p><br><strong>Hint:</strong> For the most accurate results, measure yourself in your undergarments.</p>'+
        '<ul>'+
        '	<li><strong>Neck:</strong> Measure around the base of your neck, inserting your forefinger between the tape and your neck to allow ease in fit.</li>'+
        '	<li><strong>Chest:</strong> Measure around the fullest part of your chest, keeping tape firmly under your armpits and around your shoulder blades.</li>'+
        '	<li><strong>Waist:</strong> Measure around your waist, slightly below your natural waist, where you normally wear your pants. Insert your forefinger between the tape and your body to allow ease in fit.</li>'+
        '	<li><strong>Sleeve Length:</strong> Bend your arm slightly. Measure from center back neck, across your shoulder, down to your elbow, down to your wrist.</li>'+
        '	<li><strong>Hip:</strong> Measure around the fullest part of your hips, inserting your forefinger between the tape and your hip to allow ease in fit.</li>'+
        '	<li><strong>Inseam:</strong> Measure a similar pant that fits you well. Measure along the inseam, from the crotch seam to the bottom of the hem.</li>'+
        '	<li><strong>Gloves:</strong> Measure across palm of your hand from where your thumb and index finger meet.</li>'+
        '</ul>'+
        '</div>'+
        '</div>'+
 
        '</div>'+
        '</div>';
        //END




        //Outdoor Research
        document.getElementById('size-fit-more-brand').innerHTML += 
        '<div class="row sam-static-content-row sam-static-content-row-gray">'+
        '<div class="col-12">'+

        '<h2 id="sf_outdoorresearch">OUTDOOR RESEARCH SIZE CHARTS</h2>'+
        '<div>'+
        '<div>'+
        '<h3>Gloves Size</h3>'+
        '</div>'+
        '<div>'+
        '<div style="overflow-x:auto;"><table>'+
        '	<tbody>'+
        '		<tr>'+
        '			<th>Size</th>'+
        '			<th> S/7&nbsp;&nbsp;</th>'+
        '			<th>M/8</th>'+
        '			<th>L/9</th>'+
        '			<th>XL/10</th>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Length</th>'+
        '			<td>6.5 - 7</td>'+
        '			<td>7.5 - 8</td>'+
        '			<td>8.5 - 9</td>'+
        '			<td>9 - 9.5</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Circumference</th>'+
        '			<td>7 - 7.5</td>'+
        '			<td>8 - 8.5</td>'+
        '			<td>9 - 9.5</td>'+
        '			<td>9.5 - 10</td>'+
        '		</tr>'+
        '	</tbody>'+
        '</table></div>'+
        '</div>'+
        '<div>'+
        '<p><br><strong>Hint:</strong> For the most accurate results, measure yourself in your undergarments.</p>'+
        '<ul>'+
        '	<li><strong>Neck:</strong> Measure around the base of your neck, inserting your forefinger between the tape and your neck to allow ease in fit.</li>'+
        '	<li><strong>Chest:</strong> Measure around the fullest part of your chest, keeping tape firmly under your armpits and around your shoulder blades.</li>'+
        '	<li><strong>Waist:</strong> Measure around your waist, slightly below your natural waist, where you normally wear your pants. Insert your forefinger between the tape and your body to allow ease in fit.</li>'+
        '	<li><strong>Sleeve Length:</strong> Bend your arm slightly. Measure from center back neck, across your shoulder, down to your elbow, down to your wrist.</li>'+
        '	<li><strong>Hip:</strong> Measure around the fullest part of your hips, inserting your forefinger between the tape and your hip to allow ease in fit.</li>'+
        '	<li><strong>Inseam:</strong> Measure a similar pant that fits you well. Measure along the inseam, from the crotch seam to the bottom of the hem.</li>'+
        '	<li><strong>Gloves:</strong> Measure across palm of your hand from where your thumb and index finger meet.</li>'+
        '</ul>'+
        '</div>'+
        '</div>'+

        '</div>'+
        '</div>';
        //END






        //POWERSOX
        document.getElementById('size-fit-more-brand').innerHTML += 
        '<div class="row sam-static-content-row sam-static-content-row-gray">'+
        '<div class="col-12">'+

        '<h2 id="sf_powersox">POWERSOX SIZE CHARTS</h2>'+
        '<div>'+
        '<h3>Socks Size</h3>'+
        '<div>'+
        '<div style="overflow-x:auto;"><table>'+
        '	<tbody>'+
        '		<tr>'+
        '			<th>Size</th>'+
        '			<th>Medium</th>'+
        '			<th>Large</th>'+
        '			<th>X-Large</th>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Shoe/Boot Size</th>'+
        '			<td>5 - 8.5</td>'+
        '			<td>9 - 12.5</td>'+
        '			<td>13 - 16</td>'+
        '		</tr>'+
        '	</tbody>'+
        '</table></div>'+
        '</div>'+
        '<div>'+
        '<p><br><strong>Hint:</strong> For the most accurate results, measure yourself in your undergarments.</p>'+
        '<ul>'+
        '	<li><strong>Neck:</strong> Measure around the base of your neck, inserting your forefinger between the tape and your neck to allow ease in fit.</li>'+
        '	<li><strong>Chest:</strong> Measure around the fullest part of your chest, keeping tape firmly under your armpits and around your shoulder blades.</li>'+
        '	<li><strong>Waist:</strong> Measure around your waist, slightly below your natural waist, where you normally wear your pants. Insert your forefinger between the tape and your body to allow ease in fit.</li>'+
        '	<li><strong>Sleeve Length:</strong> Bend your arm slightly. Measure from center back neck, across your shoulder, down to your elbow, down to your wrist.</li>'+
        '	<li><strong>Hip:</strong> Measure around the fullest part of your hips, inserting your forefinger between the tape and your hip to allow ease in fit.</li>'+
        '	<li><strong>Inseam:</strong> Measure a similar pant that fits you well. Measure along the inseam, from the crotch seam to the bottom of the hem.</li>'+
        '	<li><strong>Gloves:</strong> Measure across palm of your hand from where your thumb and index finger meet.</li>'+
        '</ul>'+
        '</div>'+
        '</div>'+

        '</div>'+
        '</div>';
        //END







        //PROPPER
        document.getElementById('size-fit-more-brand').innerHTML += 
        '<div class="row sam-static-content-row sam-static-content-row-gray">'+
        '<div class="col-12">'+

        '<h2 id="sf_propper">PROPPER SIZE CHARTS</h2>'+
        '<ul>'+
        '	<li><a href="#BeltsPropper">Tactical Belts</a></li>'+
        '	<li><a href="#HeadwearPropper">Headwear</a></li>'+
        '	<li><a href="#MensFootwearPropper">Men\'s Footwear</a></li>'+
        '	<li><a href="#MensTopsPropper">Men\'s Tops</a></li>'+
        '	<li><a href="#MensCoatsPropper">Men\'s Coats</a></li>'+
        '	<li><a href="#WomensPantsPropper">Men\'s Pants</a></li>'+
        '	<li><a href="#WomensFootwearPropperr">Women\'s Footwear</a></li>'+
        '	<li><a href="#WomensCoatsPropper">Women\'s Coats</a></li>'+
        '</ul>'+
        '<div>'+
        '<div>'+
        '<h3 id="BeltsPropper">Belt Size</h3>'+
        '<div style="overflow-x:auto;"><table>'+
        '	<tbody>'+
        '		<tr>'+
        '			<th>Size</th>'+
        '			<th>Small</th>'+
        '			<th>Medium</th>'+
        '			<th>Large</th>'+
        '			<th>X-Large</th>'+
        '			<th>2X-Large</th>'+
        '			<th>3X-Large</th>'+
        '			<th colspan="2">4X-Large</th>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Waist</th>'+
        '			<td>28 - 30&quot;</td>'+
        '			<td>32 - 34&quot;</td>'+
        '			<td>36 - 38&quot;</td>'+
        '			<td>40 - 42&quot;</td>'+
        '			<td>44 - 46&quot;</td>'+
        '			<td>48 - 50&quot;</td>'+
        '			<td>52 - 54&quot;</td>'+
        '		</tr>'+
        '	</tbody>'+
        '</table></div>'+
        '</div>'+
        '<div>'+
        '<h3 id="HeadwearPropper">Headwear</h3>'+
        '<div style="overflow-x:auto;"><table>'+
        '	<tbody>'+
        '		<tr>'+
        '			<th>Size</th>'+
        '			<th>7</th>'+
        '			<th>7 1/4</th>'+
        '			<th>7 1/2</th>'+
        '			<th>7 3/4</th>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Head</th>'+
        '			<td>21 7/8</td>'+
        '			<td>22 5/8</td>'+
        '			<td>23 1/2</td>'+
        '			<td>24 3/8</td>'+
        '		</tr>'+
        '	</tbody>'+
        '</table></div>'+
        '</div>'+
        '<div>'+
        '<h3 id="MensFootwearPropper">Men\'s Footwear</h3>'+
        '<div style="overflow-x:auto;"><table>'+
        '	<tbody>'+
        '		<tr>'+
        '			<th>Size</th>'+
        '			<th>&nbsp; &nbsp; &nbsp;&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>USA</th>'+
        '			<td>4</td>'+
        '			<td>4.5</td>'+
        '			<td>5</td>'+
        '			<td>5.5</td>'+
        '			<td>6</td>'+
        '			<td>6.5</td>'+
        '			<td>7</td>'+
        '			<td>7.5</td>'+
        '			<td>8</td>'+
        '			<td>8.5</td>'+
        '			<td>9</td>'+
        '			<td>9.5</td>'+
        '			<td>10</td>'+
        '			<td>10.5</td>'+
        '			<td>11</td>'+
        '			<td>11.5</td>'+
        '			<td>12</td>'+
        '			<td>12.5</td>'+
        '			<td>13</td>'+
        '			<td>13.5</td>'+
        '			<td>14</td>'+
        '			<td>14.5</td>'+
        '			<td>15</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>UK</th>'+
        '			<td>3.5</td>'+
        '			<td>4</td>'+
        '			<td>4.5</td>'+
        '			<td>5</td>'+
        '			<td>5.5</td>'+
        '			<td>6</td>'+
        '			<td>6.5</td>'+
        '			<td>7</td>'+
        '			<td>7.5</td>'+
        '			<td>8</td>'+
        '			<td>8.5</td>'+
        '			<td>9</td>'+
        '			<td>9.5</td>'+
        '			<td>10</td>'+
        '			<td>10.5</td>'+
        '			<td>11</td>'+
        '			<td>11.5</td>'+
        '			<td>12</td>'+
        '			<td>12.5</td>'+
        '			<td>13</td>'+
        '			<td>13.5</td>'+
        '			<td>14</td>'+
        '			<td>14.5</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>EU</th>'+
        '			<td>37</td>'+
        '			<td>37.5</td>'+
        '			<td>38</td>'+
        '			<td>38.5</td>'+
        '			<td>39</td>'+
        '			<td>39.5</td>'+
        '			<td>40</td>'+
        '			<td>40.5</td>'+
        '			<td>41</td>'+
        '			<td>41.5</td>'+
        '			<td>42</td>'+
        '			<td>42.5</td>'+
        '			<td>43</td>'+
        '			<td>43.5</td>'+
        '			<td>44</td>'+
        '			<td>44.5</td>'+
        '			<td>45</td>'+
        '			<td>45.5</td>'+
        '			<td>46</td>'+
        '			<td>46.5</td>'+
        '			<td>47</td>'+
        '			<td>47.5</td>'+
        '			<td>48</td>'+
        '		</tr>'+
        '	</tbody>'+
        '</table></div>'+
        '</div>'+
        '<div>'+
        '<h3 id="MensTopsPropper">Men\'s Tops</h3>'+
        '<div style="overflow-x:auto;"><table>'+
        '	<tbody>'+
        '		<tr>'+
        '			<th>Size</th>'+
        '			<th>&nbsp; &nbsp; &nbsp;&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Neck</th>'+
        '			<td>13 - 13.5</td>'+
        '			<td>14 - 14.5</td>'+
        '			<td>15 - 15.5</td>'+
        '			<td>16 - 16.5</td>'+
        '			<td>17 - 17.5</td>'+
        '			<td>18 - 18.5</td>'+
        '			<td>19 - 19.5</td>'+
        '			<td>20 - 20.5</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Chest</th>'+
        '			<td>30 - 32</td>'+
        '			<td>34 - 36</td>'+
        '			<td>38 - 40</td>'+
        '			<td>42 - 44</td>'+
        '			<td>46 - 48</td>'+
        '			<td>50 - 52</td>'+
        '			<td>54 - 56</td>'+
        '			<td>58 - 60</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Sleeve</th>'+
        '			<td>32 - 32.5</td>'+
        '			<td>33 - 33.5</td>'+
        '			<td>34 - 34.5</td>'+
        '			<td>35 - 35.5</td>'+
        '			<td>36 - 36.5</td>'+
        '			<td>37 - 37.5</td>'+
        '			<td>38 - 38.5</td>'+
        '			<td>39 - 39.5</td>'+
        '		</tr>'+
        '	</tbody>'+
        '</table></div>'+
        '</div>'+
        '<div>'+
        '<h3 id="MensCoatsPropper">Men\'s Coats</h3>'+
        '<div style="overflow-x:auto;"><table>'+
        '	<tbody>'+
        '		<tr>'+
        '			<th>Size</th>'+
        '			<th>32R</th>'+
        '			<th>34XS</th>'+
        '			<th>34S</th>'+
        '			<th>34L</th>'+
        '			<th>34XL</th>'+
        '			<th>36XS</th>'+
        '			<th>36S</th>'+
        '			<th>36R</th>'+
        '			<th>36L</th>'+
        '			<th>36XL</th>'+
        '			<th>38XS</th>'+
        '			<th>38S</th>'+
        '			<th>38R</th>'+
        '			<th>38L</th>'+
        '			<th>38XL</th>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Chest</th>'+
        '			<td>31 - 32</td>'+
        '			<td>33 - 34</td>'+
        '			<td>33 - 34</td>'+
        '			<td>33 - 34</td>'+
        '			<td>33 - 34</td>'+
        '			<td>35 - 36</td>'+
        '			<td>35 - 36</td>'+
        '			<td>35 - 36</td>'+
        '			<td>35 - 36</td>'+
        '			<td>35 - 36</td>'+
        '			<td>37 - 38</td>'+
        '			<td>37 - 38</td>'+
        '			<td>37 - 38</td>'+
        '			<td>37 - 38</td>'+
        '			<td>37 - 38</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Height</th>'+
        '			<td>67 - 71</td>'+
        '			<td>59 - 63</td>'+
        '			<td>63 - 67</td>'+
        '			<td>67 - 71</td>'+
        '			<td>71 - 75</td>'+
        '			<td>75 - 79</td>'+
        '			<td>59 - 63</td>'+
        '			<td>63 - 67</td>'+
        '			<td>67 - 71</td>'+
        '			<td>71 - 75</td>'+
        '			<td>75 - 79</td>'+
        '			<td>59 - 63</td>'+
        '			<td>63 - 67</td>'+
        '			<td>67 - 71</td>'+
        '			<td>71 - 75</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Sleeve</th>'+
        '			<td>22 1/8</td>'+
        '			<td>20 3/4</td>'+
        '			<td>21 1/2</td>'+
        '			<td>22 1/4</td>'+
        '			<td>23 3/4</td>'+
        '			<td>20 7/8</td>'+
        '			<td>21 5/8</td>'+
        '			<td>22 3/8</td>'+
        '			<td>23 1/8</td>'+
        '			<td>23 7/8</td>'+
        '			<td>21</td>'+
        '			<td>21 3/4</td>'+
        '			<td>22 1/2</td>'+
        '			<td>23 1/4</td>'+
        '			<td>24</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>OCP Size</th>'+
        '			<td>XSR</td>'+
        '			<td>SXS</td>'+
        '			<td>SS</td>'+
        '			<td>SL</td>'+
        '			<td>SXL</td>'+
        '			<td>SXS</td>'+
        '			<td>SS</td>'+
        '			<td>SR</td>'+
        '			<td>SL</td>'+
        '			<td>SXL</td>'+
        '			<td>SXS</td>'+
        '			<td>MS</td>'+
        '			<td>MR</td>'+
        '			<td>ML</td>'+
        '			<td>MXL</td>'+
        '		</tr>'+
        '	</tbody>'+
        '</table></div>'+
        '<div style="overflow-x:auto;"><table>'+
        '	<tbody>'+
        '		<tr>'+
        '			<th>Size</th>'+
        '			<th>40XS</th>'+
        '			<th>40S</th>'+
        '			<th>40R</th>'+
        '			<th>40L</th>'+
        '			<th>40XL</th>'+
        '			<th>42XS</th>'+
        '			<th>42S</th>'+
        '			<th>42R</th>'+
        '			<th>42L</th>'+
        '			<th>42XL</th>'+
        '			<th>44S</th>'+
        '			<th>44R</th>'+
        '			<th>44L</th>'+
        '			<th>44XL</th>'+
        '			<th>46S</th>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Chest</th>'+
        '			<td>39 - 40</td>'+
        '			<td>39 - 40</td>'+
        '			<td>39 - 40</td>'+
        '			<td>39 - 40</td>'+
        '			<td>39 - 40</td>'+
        '			<td>41 - 42</td>'+
        '			<td>41 - 42</td>'+
        '			<td>41 - 42</td>'+
        '			<td>41 - 42</td>'+
        '			<td>41 - 42</td>'+
        '			<td>43 - 44</td>'+
        '			<td>43 - 44</td>'+
        '			<td>43 - 44</td>'+
        '			<td>43 - 44</td>'+
        '			<td>45 - 46</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Height</th>'+
        '			<td>59 - 63</td>'+
        '			<td>63 - 67</td>'+
        '			<td>67 - 71</td>'+
        '			<td>71 - 75</td>'+
        '			<td>75 - 79</td>'+
        '			<td>59 - 63</td>'+
        '			<td>63 - 67</td>'+
        '			<td>67 - 71</td>'+
        '			<td>71 - 75</td>'+
        '			<td>75 - 79</td>'+
        '			<td>63 - 67</td>'+
        '			<td>67 - 71</td>'+
        '			<td>71 - 75</td>'+
        '			<td>75 - 79</td>'+
        '			<td>63 - 67</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Sleeve</th>'+
        '			<td>21 1 /8</td>'+
        '			<td>21 7/8</td>'+
        '			<td>22 5/8</td>'+
        '			<td>23 3/8</td>'+
        '			<td>24 1/8</td>'+
        '			<td>21 1/4</td>'+
        '			<td>22</td>'+
        '			<td>22 3/4</td>'+
        '			<td>23 1/2</td>'+
        '			<td>24 3/8</td>'+
        '			<td>22 1/8</td>'+
        '			<td>22 7/8</td>'+
        '			<td>23 5/8</td>'+
        '			<td>24 3/8</td>'+
        '			<td>22 1/4</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>OCP Size</th>'+
        '			<td>MXS</td>'+
        '			<td>MS</td>'+
        '			<td>MR</td>'+
        '			<td>ML</td>'+
        '			<td>MXL</td>'+
        '			<td>LXS</td>'+
        '			<td>LS</td>'+
        '			<td>LR</td>'+
        '			<td>LL</td>'+
        '			<td>LXL</td>'+
        '			<td>LXS</td>'+
        '			<td>LS</td>'+
        '			<td>LR</td>'+
        '			<td>LL</td>'+
        '			<td>XLS</td>'+
        '		</tr>'+
        '	</tbody>'+
        '</table></div>'+
        '<div style="overflow-x:auto;"><table>'+
        '	<tbody>'+
        '		<tr>'+
        '			<th>Size</th>'+
        '			<th>46R</th>'+
        '			<th>46L</th>'+
        '			<th>48S</th>'+
        '			<th>48R</th>'+
        '			<th>48L</th>'+
        '			<th>50R</th>'+
        '			<th>50L</th>'+
        '			<th>52R</th>'+
        '			<th>52L</th>'+
        '			<th>54R</th>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Chest</th>'+
        '			<td>45 - 46</td>'+
        '			<td>45 - 46</td>'+
        '			<td>47 - 48</td>'+
        '			<td>47 - 48</td>'+
        '			<td>47 - 48</td>'+
        '			<td>49 - 50</td>'+
        '			<td>49 - 50</td>'+
        '			<td>51 - 52</td>'+
        '			<td>51 - 52</td>'+
        '			<td>52 - 53</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Height</th>'+
        '			<td>67 - 71</td>'+
        '			<td>71 - 75</td>'+
        '			<td>63 - 67</td>'+
        '			<td>67 - 71</td>'+
        '			<td>71 - 75</td>'+
        '			<td>67 - 71</td>'+
        '			<td>71 - 75</td>'+
        '			<td>67 - 71</td>'+
        '			<td>71 - 75</td>'+
        '			<td>67 - 71</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Sleeve</th>'+
        '			<td>23</td>'+
        '			<td>23 3/4</td>'+
        '			<td>22 3/8</td>'+
        '			<td>23 1/8</td>'+
        '			<td>23 7/8</td>'+
        '			<td>23 1/4</td>'+
        '			<td>24</td>'+
        '			<td>23 3/8</td>'+
        '			<td>24 1/8</td>'+
        '			<td>23 1/2</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>OCP Size</th>'+
        '			<td>XLR</td>'+
        '			<td>XLL</td>'+
        '			<td>XLS</td>'+
        '			<td>XLR</td>'+
        '			<td>XLL</td>'+
        '			<td>2XLR</td>'+
        '			<td>2XLL</td>'+
        '			<td>3XLR</td>'+
        '			<td>3XLL</td>'+
        '			<td>4XLR</td>'+
        '		</tr>'+
        '	</tbody>'+
        '</table>'+
        '</div>'+
        '<div>'+
        '<h3 id="WomensPantsPropper">Men\'s Pants</h3>'+
        '<div style="overflow-x:auto;"><table>'+
        '	<tbody>'+
        '		<tr>'+
        '			<th>Size</th>'+
        '			<th>28XS</th>'+
        '			<th>28S</th>'+
        '			<th>28R</th>'+
        '			<th>28L</th>'+
        '			<th>28XL</th>'+
        '			<th>30XS</th>'+
        '			<th>30S</th>'+
        '			<th>30R</th>'+
        '			<th>30L</th>'+
        '			<th>30XL</th>'+
        '			<th>32XS</th>'+
        '			<th>32S</th>'+
        '			<th>32R</th>'+
        '			<th>32L</th>'+
        '			<th>32XL</th>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Waist</th>'+
        '			<td>27 - 28</td>'+
        '			<td>27 - 28</td>'+
        '			<td>27 - 28</td>'+
        '			<td>27 - 28</td>'+
        '			<td>27 - 28</td>'+
        '			<td>29 - 30</td>'+
        '			<td>29 - 30</td>'+
        '			<td>29 - 30</td>'+
        '			<td>29 - 30</td>'+
        '			<td>29 - 30</td>'+
        '			<td>31 - 32</td>'+
        '			<td>31 - 32</td>'+
        '			<td>31 - 32</td>'+
        '			<td>31 - 32</td>'+
        '			<td>31 - 32</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Inseam</th>'+
        '			<td>29 - 30</td>'+
        '			<td>31 - 32</td>'+
        '			<td>33 - 34</td>'+
        '			<td>35 - 36</td>'+
        '			<td>37 - 38</td>'+
        '			<td>29 - 30</td>'+
        '			<td>31 - 32</td>'+
        '			<td>33 - 34</td>'+
        '			<td>35 - 36</td>'+
        '			<td>37 - 38</td>'+
        '			<td>29 - 30</td>'+
        '			<td>31 - 32</td>'+
        '			<td>33 - 34</td>'+
        '			<td>35 - 36</td>'+
        '			<td>37 - 38</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>OCP Size</th>'+
        '			<td>SS/SR</td>'+
        '			<td>SR</td>'+
        '			<td>SL</td>'+
        '			<td>SL/SXL</td>'+
        '			<td>SXL</td>'+
        '			<td>SS/SR</td>'+
        '			<td>SR</td>'+
        '			<td>SL</td>'+
        '			<td>SL/SXL</td>'+
        '			<td>SXL</td>'+
        '			<td>SS/SR/MS/MR</td>'+
        '			<td>SR/MR</td>'+
        '			<td>SL/ML</td>'+
        '			<td>SXL/MXL</td>'+
        '			<td>SXL/MXL</td>'+
        '		</tr>'+
        '	</tbody>'+
        '</table></div>'+
        '<div style="overflow-x:auto;"><table>'+
        '	<tbody>'+
        '		<tr>'+
        '			<th>Size</th>'+
        '			<th>34XS</th>'+
        '			<th>34S</th>'+
        '			<th>34R</th>'+
        '			<th>34L</th>'+
        '			<th>34XL</th>'+
        '			<th>36XS</th>'+
        '			<th>36S</th>'+
        '			<th>36R</th>'+
        '			<th>36L</th>'+
        '			<th>36XL</th>'+
        '			<th>38XS</th>'+
        '			<th>38S</th>'+
        '			<th>38R</th>'+
        '			<th>38L</th>'+
        '			<th>38XL</th>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Waist</th>'+
        '			<td>33 - 34</td>'+
        '			<td>33 - 34</td>'+
        '			<td>33 - 34</td>'+
        '			<td>33 - 34</td>'+
        '			<td>33 - 34</td>'+
        '			<td>35 - 36</td>'+
        '			<td>'+
        '			<p>35 - 36</p>'+
        '			</td>'+
        '			<td>35 - 36</td>'+
        '			<td>35 - 36</td>'+
        '			<td>35 - 36</td>'+
        '			<td>37 - 38</td>'+
        '			<td>37 - 38</td>'+
        '			<td>'+
        '			<p>37 - 38</p>'+
        '			</td>'+
        '			<td>37 - 38</td>'+
        '			<td>37 - 38</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Inseam</th>'+
        '			<td>29 - 30</td>'+
        '			<td>31 - 32</td>'+
        '			<td>33 - 34</td>'+
        '			<td>35 - 36</td>'+
        '			<td>37 - 38</td>'+
        '			<td>29 - 30</td>'+
        '			<td>31 - 32</td>'+
        '			<td>33 - 34</td>'+
        '			<td>35 - 36</td>'+
        '			<td>37 - 38</td>'+
        '			<td>29 - 30</td>'+
        '			<td>31 - 32</td>'+
        '			<td>33 - 34</td>'+
        '			<td>35 - 36</td>'+
        '			<td>37 - 38</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>OCP Size</th>'+
        '			<td>MS/MR</td>'+
        '			<td>MR</td>'+
        '			<td>ML</td>'+
        '			<td>ML/MXL</td>'+
        '			<td>MXL</td>'+
        '			<td>MS/LS</td>'+
        '			<td>MR/LR</td>'+
        '			<td>ML/LL</td>'+
        '			<td>ML/MXL/LL/LXL</td>'+
        '			<td>MXL/LXL</td>'+
        '			<td>LS</td>'+
        '			<td>LR</td>'+
        '			<td>LL</td>'+
        '			<td>LL/LXL</td>'+
        '			<td>LXL</td>'+
        '		</tr>'+
        '	</tbody>'+
        '</table></div>'+
        '<div style="overflow-x:auto;"><table>'+
        '	<tbody>'+
        '		<tr>'+
        '			<th>Size</th>'+
        '			<th>40XS</th>'+
        '			<th>40S</th>'+
        '			<th>40R</th>'+
        '			<th>40L</th>'+
        '			<th>40XL</th>'+
        '			<th>42XS</th>'+
        '			<th>42S</th>'+
        '			<th>42R</th>'+
        '			<th>42L</th>'+
        '			<th>42XL</th>'+
        '			<th>44S</th>'+
        '			<th>44R</th>'+
        '			<th>44L</th>'+
        '			<th>44XL</th>'+
        '			<th>46S</th>'+
        '			<th>46R</th>'+
        '			<th>46L</th>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Waist</th>'+
        '			<td>39 - 40</td>'+
        '			<td>39 - 40</td>'+
        '			<td>39 - 40</td>'+
        '			<td>39 - 40</td>'+
        '			<td>39 - 40</td>'+
        '			<td>41 - 42</td>'+
        '			<td>41 - 42</td>'+
        '			<td>41 - 42</td>'+
        '			<td>41 - 42</td>'+
        '			<td>41 - 42</td>'+
        '			<td>43 - 44</td>'+
        '			<td>43 - 44</td>'+
        '			<td>43 - 44</td>'+
        '			<td>43 - 44</td>'+
        '			<td>45 - 46</td>'+
        '			<td>45 - 46</td>'+
        '			<td>45 - 46</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Inseam</th>'+
        '			<td>29 - 30</td>'+
        '			<td>31 - 32</td>'+
        '			<td>33 - 34</td>'+
        '			<td>35 - 36</td>'+
        '			<td>37 - 38</td>'+
        '			<td>29 - 30</td>'+
        '			<td>31 - 32</td>'+
        '			<td>33 - 34</td>'+
        '			<td>35 - 36</td>'+
        '			<td>37 - 38</td>'+
        '			<td>31 - 32</td>'+
        '			<td>33 - 34</td>'+
        '			<td>35 - 36</td>'+
        '			<td>37 - 38</td>'+
        '			<td>31 - 32</td>'+
        '			<td>33 - 34</td>'+
        '			<td>35 - 36</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>OCP Size</th>'+
        '			<td>XLS</td>'+
        '			<td>XLR</td>'+
        '			<td>XLL</td>'+
        '			<td>XLL/XLXL</td>'+
        '			<td>XLXL</td>'+
        '			<td>XLS</td>'+
        '			<td>XLR</td>'+
        '			<td>XLL</td>'+
        '			<td>XLL/XLXL</td>'+
        '			<td>XLXL</td>'+
        '			<td>2XLS</td>'+
        '			<td>2XLR</td>'+
        '			<td>2XLL/2XLXL</td>'+
        '			<td>2XLXL</td>'+
        '			<td>3XLS</td>'+
        '			<td>3XLR</td>'+
        '			<td>3XLXL</td>'+
        '		</tr>'+
        '	</tbody>'+
        '</table></div>'+
        '<h3 id="WomensFootwearPropperr">Women\'s Footwear</h3>'+
        '<div style="overflow-x:auto;"><table>'+
        '	<tbody>'+
        '		<tr>'+
        '			<th>Size</th>'+
        '			<th>&nbsp; &nbsp; &nbsp;&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>USA</th>'+
        '			<td>6</td>'+
        '			<td>6.5</td>'+
        '			<td>7</td>'+
        '			<td>7.5</td>'+
        '			<td>8</td>'+
        '			<td>8.5</td>'+
        '			<td>9</td>'+
        '			<td>9.5</td>'+
        '			<td>10</td>'+
        '			<td>'+
        '			<p>10.5</p>'+
        '			</td>'+
        '			<td>11</td>'+
        '			<td>11.5</td>'+
        '			<td>12</td>'+
        '			<td>12.5</td>'+
        '			<td>13</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>UK</th>'+
        '			<td>4</td>'+
        '			<td>4.5</td>'+
        '			<td>5</td>'+
        '			<td>5.5</td>'+
        '			<td>6</td>'+
        '			<td>6.5</td>'+
        '			<td>7</td>'+
        '			<td>7.5</td>'+
        '			<td>8</td>'+
        '			<td>8.5</td>'+
        '			<td>9</td>'+
        '			<td>9.5</td>'+
        '			<td>10</td>'+
        '			<td>10.5</td>'+
        '			<td>11</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>EU</th>'+
        '			<td>36.5</td>'+
        '			<td>37</td>'+
        '			<td>37.5</td>'+
        '			<td>38</td>'+
        '			<td>38.5</td>'+
        '			<td>39</td>'+
        '			<td>39.5</td>'+
        '			<td>40</td>'+
        '			<td>40.5</td>'+
        '			<td>41</td>'+
        '			<td>41.5</td>'+
        '			<td>42</td>'+
        '			<td>42.5</td>'+
        '			<td>43</td>'+
        '			<td>43.5</td>'+
        '		</tr>'+
        '	</tbody>'+
        '</table></div>'+
        '</div>'+
        '<div>'+
        '<h3 id="WomensCoatsPropper">Women\'s Tops and Bottoms</h3>'+
        '<div style="overflow-x:auto;"><table>'+
        '	<tbody>'+
        '		<tr>'+
        '			<th>Size</th>'+
        '			<th>&nbsp; &nbsp; &nbsp;&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>USA</th>'+
        '			<td>6</td>'+
        '			<td>6.5</td>'+
        '			<td>7</td>'+
        '			<td>7.5</td>'+
        '			<td>8</td>'+
        '			<td>8.5</td>'+
        '			<td>9</td>'+
        '			<td>9.5</td>'+
        '			<td>10</td>'+
        '			<td>10.5</td>'+
        '			<td>11</td>'+
        '			<td>11.5</td>'+
        '			<td>12</td>'+
        '			<td>12.5</td>'+
        '			<td>13</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>UK</th>'+
        '			<td>4</td>'+
        '			<td>4.5</td>'+
        '			<td>5</td>'+
        '			<td>5.5</td>'+
        '			<td>6</td>'+
        '			<td>6.5</td>'+
        '			<td>7</td>'+
        '			<td>7.5</td>'+
        '			<td>8</td>'+
        '			<td>8.5</td>'+
        '			<td>9</td>'+
        '			<td>9.5</td>'+
        '			<td>10</td>'+
        '			<td>10.5</td>'+
        '			<td>11</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>EU</th>'+
        '			<td>36.5</td>'+
        '			<td>37</td>'+
        '			<td>37.5</td>'+
        '			<td>38</td>'+
        '			<td>38.5</td>'+
        '			<td>39</td>'+
        '			<td>39.5</td>'+
        '			<td>40</td>'+
        '			<td>40.5</td>'+
        '			<td>41</td>'+
        '			<td>41.5</td>'+
        '			<td>42</td>'+
        '			<td>42.5</td>'+
        '			<td>43</td>'+
        '			<td>43.5</td>'+
        '		</tr>'+
        '	</tbody>'+
        '</table>'+
        '<h3 id="WomensPantsPropper">Women\'s Coats</h3>'+
        '<div style="overflow-x:auto;"><table>'+
        '	<tbody>'+
        '		<tr>'+
        '			<th>Size</th>'+
        '			<th>2X</th>'+
        '			<th>2R</th>'+
        '			<th>4XS</th>'+
        '			<th>4S</th>'+
        '			<th>4R</th>'+
        '			<th>6XS</th>'+
        '			<th>6S</th>'+
        '			<th>6R</th>'+
        '			<th>6L</th>'+
        '			<th>8XS</th>'+
        '			<th>8S</th>'+
        '			<th>8R</th>'+
        '			<th>8L</th>'+
        '			<th>10XS</th>'+
        '			<th>10S</th>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Chest</th>'+
        '			<td>32</td>'+
        '			<td>32</td>'+
        '			<td>33</td>'+
        '			<td>33</td>'+
        '			<td>33</td>'+
        '			<td>34</td>'+
        '			<td>34</td>'+
        '			<td>34</td>'+
        '			<td>34</td>'+
        '			<td>35</td>'+
        '			<td>35</td>'+
        '			<td>35</td>'+
        '			<td>35</td>'+
        '			<td>36</td>'+
        '			<td>36</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Sleeve</th>'+
        '			<td>19 7/8</td>'+
        '			<td>20 5/8</td>'+
        '			<td>19 1/4</td>'+
        '			<td>20</td>'+
        '			<td>20 3/4</td>'+
        '			<td>19 3/8</td>'+
        '			<td>20 1/8</td>'+
        '			<td>20 7/8</td>'+
        '			<td>21 5/8</td>'+
        '			<td>19 1/2</td>'+
        '			<td>20 1/4</td>'+
        '			<td>21</td>'+
        '			<td>21 3/4</td>'+
        '			<td>19 5/8</td>'+
        '			<td>20 3/8</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>OCP Size</th>'+
        '			<td>XSXS</td>'+
        '			<td>XSXS</td>'+
        '			<td>XSXS/SXS</td>'+
        '			<td>XSXS/SXS</td>'+
        '			<td>XSXS/SXS</td>'+
        '			<td>SXS</td>'+
        '			<td>SXS</td>'+
        '			<td>SXS/SS</td>'+
        '			<td>SR</td>'+
        '			<td>SXS</td>'+
        '			<td>SXS</td>'+
        '			<td>SS</td>'+
        '			<td>SS/SR</td>'+
        '			<td>SXS/SS</td>'+
        '			<td>SXS/SS</td>'+
        '		</tr>'+
        '	</tbody>'+
        '</table>'+


        '</div>'+
        '</div>';
        //END






        //QALO
        document.getElementById('size-fit-more-brand').innerHTML += 
        '<div class="row sam-static-content-row sam-static-content-row-gray">'+
        '<div class="col-12">'+

        '<h2 id="sf_qalo">QALO SIZE CHARTS</h2>'+
        '<div>'+
        '<div>'+
        '<h3>Ring Size Guide</h3>'+
        '<div style="overflow-x:auto;"><table>'+
        '	<tbody>'+
        '		<tr>'+
        '			<th>Size</th>'+
        '			<th>&nbsp; &nbsp; &nbsp;&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Circumference (in)</th>'+
        '			<td>1 7/8</td>'+
        '			<td>1 15/16</td>'+
        '			<td>2</td>'+
        '			<td>2 1/16</td>'+
        '			<td>2 1/8</td>'+
        '			<td>2 3/16</td>'+
        '			<td>2 3/16</td>'+
        '			<td>2 1/4</td>'+
        '			<td>2 1/4</td>'+
        '			<td>2 5/16</td>'+
        '			<td>2 3/8</td>'+
        '			<td>2 7/16</td>'+
        '			<td>2 1/2</td>'+
        '			<td>2 9/16</td>'+
        '			<td>2 5/8</td>'+
        '			<td>2 11/16</td>'+
        '			<td>2 3/4</td>'+
        '			<td>2 3/4</td>'+
        '			<td>2 13/16</td>'+
        '			<td>2 13/16</td>'+
        '			<td>2 7/8</td>'+
        '			<td>2 15/16</td>'+
        '			<td>2 15/16</td>'+
        '			<td>3</td>'+
        '			<td>3</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Circumference (cm)</th>'+
        '			<td>48</td>'+
        '			<td>49</td>'+
        '			<td>51</td>'+
        '			<td>52</td>'+
        '			<td>53</td>'+
        '			<td>55</td>'+
        '			<td>56</td>'+
        '			<td>57</td>'+
        '			<td>58</td>'+
        '			<td>59</td>'+
        '			<td>61</td>'+
        '			<td>62</td>'+
        '			<td>63</td>'+
        '			<td>65</td>'+
        '			<td>66</td>'+
        '			<td>68</td>'+
        '			<td>69</td>'+
        '			<td>70</td>'+
        '			<td>71</td>'+
        '			<td>72</td>'+
        '			<td>73</td>'+
        '			<td>74</td>'+
        '			<td>75</td>'+
        '			<td>76</td>'+
        '			<td>77</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Diameter (mm)</th>'+
        '			<td>15.27</td>'+
        '			<td>15.70</td>'+
        '			<td>16.10</td>'+
        '			<td>16.51</td>'+
        '			<td>16.92</td>'+
        '			<td>17.35</td>'+
        '			<td>17.75</td>'+
        '			<td>18.19</td>'+
        '			<td>18.53</td>'+
        '			<td>18.89</td>'+
        '			<td>19.41</td>'+
        '			<td>19.84</td>'+
        '			<td>20.20</td>'+
        '			<td>20.68</td>'+
        '			<td>21.08</td>'+
        '			<td>21.49</td>'+
        '			<td>21.89</td>'+
        '			<td>22.33</td>'+
        '			<td>22.60</td>'+
        '			<td>22.69</td>'+
        '			<td>22.92</td>'+
        '			<td>23.06</td>'+
        '			<td>23.24</td>'+
        '			<td>23.47</td>'+
        '			<td>23.55</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>&nbsp;</th>'+
        '			<td>&nbsp;</td>'+
        '			<td>&nbsp;</td>'+
        '			<td>&nbsp;</td>'+
        '			<td>&nbsp;</td>'+
        '			<td>&nbsp;</td>'+
        '			<td>&nbsp;</td>'+
        '			<td>&nbsp;</td>'+
        '			<td>&nbsp;</td>'+
        '			<td>&nbsp;</td>'+
        '			<td>&nbsp;</td>'+
        '			<td>&nbsp;</td>'+
        '			<td>&nbsp;</td>'+
        '			<td>&nbsp;</td>'+
        '			<td>&nbsp;</td>'+
        '			<td>&nbsp;</td>'+
        '			<td>&nbsp;</td>'+
        '			<td>&nbsp;</td>'+
        '			<td>&nbsp;</td>'+
        '			<td>&nbsp;</td>'+
        '			<td>&nbsp;</td>'+
        '			<td>&nbsp;</td>'+
        '			<td>&nbsp;</td>'+
        '			<td>&nbsp;</td>'+
        '			<td>&nbsp;</td>'+
        '			<td>&nbsp;</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>USA</th>'+
        '			<td>4</td>'+
        '			<td>5</td>'+
        '			<td>5</td>'+
        '			<td>6</td>'+
        '			<td>6</td>'+
        '			<td>7</td>'+
        '			<td>7</td>'+
        '			<td>8</td>'+
        '			<td>8</td>'+
        '			<td>9</td>'+
        '			<td>9</td>'+
        '			<td>10</td>'+
        '			<td>10</td>'+
        '			<td>11</td>'+
        '			<td>11</td>'+
        '			<td>12</td>'+
        '			<td>12</td>'+
        '			<td>13</td>'+
        '			<td>13</td>'+
        '			<td>14</td>'+
        '			<td>14</td>'+
        '			<td>15</td>'+
        '			<td>15</td>'+
        '			<td>16</td>'+
        '			<td>16</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>UK</th>'+
        '			<td>I 1/2</td>'+
        '			<td>J 1/2</td>'+
        '			<td>L</td>'+
        '			<td>M</td>'+
        '			<td>N</td>'+
        '			<td>O</td>'+
        '			<td>P</td>'+
        '			<td>Q</td>'+
        '			<td>R 1/2</td>'+
        '			<td>S 1/2</td>'+
        '			<td>T 1/2</td>'+
        '			<td>U 1/2</td>'+
        '			<td>V 1/2</td>'+
        '			<td>W 1/2</td>'+
        '			<td>Y</td>'+
        '			<td>Z</td>'+
        '			<td>Z + 1</td>'+
        '			<td>Z + 1 1/2</td>'+
        '			<td>Z + 2</td>'+
        '			<td>Z + 2 1/2</td>'+
        '			<td>Z + 3</td>'+
        '			<td>Z + 3 1/2</td>'+
        '			<td>Z + 4</td>'+
        '			<td>Z + 4 1/2</td>'+
        '			<td>&nbsp;</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>UK</th>'+
        '			<td>8</td>'+
        '			<td>9</td>'+
        '			<td>11</td>'+
        '			<td>12</td>'+
        '			<td>13</td>'+
        '			<td>14</td>'+
        '			<td>15</td>'+
        '			<td>16</td>'+
        '			<td>17</td>'+
        '			<td>18</td>'+
        '			<td>19</td>'+
        '			<td>20</td>'+
        '			<td>22</td>'+
        '			<td>23</td>'+
        '			<td>24</td>'+
        '			<td>25</td>'+
        '			<td>26</td>'+
        '			<td>27</td>'+
        '			<td>- -</td>'+
        '			<td>- -</td>'+
        '			<td>- -</td>'+
        '			<td>- -</td>'+
        '			<td>- -</td>'+
        '			<td>- -</td>'+
        '			<td>- -</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Germany</th>'+
        '			<td>15 1/4</td>'+
        '			<td>15 3/4</td>'+
        '			<td>16</td>'+
        '			<td>16 1/2</td>'+
        '			<td>17</td>'+
        '			<td>17 1/4</td>'+
        '			<td>17 3/4</td>'+
        '			<td>18</td>'+
        '			<td>18 1/2</td>'+
        '			<td>19</td>'+
        '			<td>19 1/2</td>'+
        '			<td>20</td>'+
        '			<td>20 1/4</td>'+
        '			<td>20 3/4</td>'+
        '			<td>21</td>'+
        '			<td>21 1/4</td>'+
        '			<td>21 3/4</td>'+
        '			<td>22</td>'+
        '			<td>- -</td>'+
        '			<td>- -</td>'+
        '			<td>- -</td>'+
        '			<td>- -</td>'+
        '			<td>- -</td>'+
        '			<td>- -</td>'+
        '			<td>- -</td>'+
        '		</tr>'+
        '	</tbody>'+
        '</table></div>'+
        '</div>'+
        '<div>'+
        '<p><br><strong>Hint:</strong> For the most accurate results, measure yourself in your undergarments.</p>'+
        '<ul>'+
        '	<li><strong>Neck:</strong> Measure around the base of your neck, inserting your forefinger between the tape and your neck to allow ease in fit.</li>'+
        '	<li><strong>Chest:</strong> Measure around the fullest part of your chest, keeping tape firmly under your armpits and around your shoulder blades.</li>'+
        '	<li><strong>Waist:</strong> Measure around your waist, slightly below your natural waist, where you normally wear your pants. Insert your forefinger between the tape and your body to allow ease in fit.</li>'+
        '	<li><strong>Sleeve Length:</strong> Bend your arm slightly. Measure from center back neck, across your shoulder, down to your elbow, down to your wrist.</li>'+
        '	<li><strong>Hip:</strong> Measure around the fullest part of your hips, inserting your forefinger between the tape and your hip to allow ease in fit.</li>'+
        '	<li><strong>Inseam:</strong> Measure a similar pant that fits you well. Measure along the inseam, from the crotch seam to the bottom of the hem.</li>'+
        '	<li><strong>Gloves:</strong> Measure across palm of your hand from where your thumb and index finger meet.</li>'+
        '</ul>'+
        '</div>'+
        '</div>'+

        '</div>'+
        '</div>';
        //END





        //REEBOK
        document.getElementById('size-fit-more-brand').innerHTML += 
        '<div class="row sam-static-content-row sam-static-content-row-gray">'+
        '<div class="col-12">'+

        '<h2 id="sf_reebok">REEBOK SIZE CHARTS</h2>'+
        '<ul>'+
        '	<li><a href="#MenFootwearReebok">Men\'s Footwear</a></li>'+
        '	<li><a href="#WomenFootwearReebok">Women\'s Footwear</a></li>'+
        '</ul>'+
        '<div>'+
        '<div>'+
        '<h3 id="MenFootwearReebok">Men\'s Footwear</h3>'+
        '<div style="overflow-x:auto;"><table>'+
        '	<tbody>'+
        '		<tr>'+
        '			<th>Size</th>'+
        '			<th>&nbsp; &nbsp; &nbsp;&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>USA</th>'+
        '			<td>7</td>'+
        '			<td>7.5</td>'+
        '			<td>8</td>'+
        '			<td>8.5</td>'+
        '			<td>9</td>'+
        '			<td>9.5</td>'+
        '			<td>10</td>'+
        '			<td>10.5</td>'+
        '			<td>11</td>'+
        '			<td>11.5</td>'+
        '			<td>12</td>'+
        '			<td>12.5</td>'+
        '			<td>13</td>'+
        '			<td>13.5</td>'+
        '			<td>14</td>'+
        '			<td>14.5</td>'+
        '			<td>15</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Heel-Toe (in)</th>'+
        '			<td>9.8</td>'+
        '			<td>10</td>'+
        '			<td>10.2</td>'+
        '			<td>10.4</td>'+
        '			<td>10.6</td>'+
        '			<td>10.8</td>'+
        '			<td>11</td>'+
        '			<td>11.2</td>'+
        '			<td>11.4</td>'+
        '			<td>11.6</td>'+
        '			<td>11.8</td>'+
        '			<td>12</td>'+
        '			<td>12.2</td>'+
        '			<td>12.4</td>'+
        '			<td>12.6</td>'+
        '			<td>12.8</td>'+
        '			<td>13</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>EUR</th>'+
        '			<td>39</td>'+
        '			<td>40</td>'+
        '			<td>40.5</td>'+
        '			<td>40.5</td>'+
        '			<td>42</td>'+
        '			<td>42.5</td>'+
        '			<td>43</td>'+
        '			<td>44</td>'+
        '			<td>44.5</td>'+
        '			<td>45</td>'+
        '			<td>45.5</td>'+
        '			<td>46</td>'+
        '			<td>47</td>'+
        '			<td>48</td>'+
        '			<td>48.5</td>'+
        '			<td>49</td>'+
        '			<td>50</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>UK</th>'+
        '			<td>6</td>'+
        '			<td>6.5</td>'+
        '			<td>7</td>'+
        '			<td>7</td>'+
        '			<td>8</td>'+
        '			<td>8.5</td>'+
        '			<td>9</td>'+
        '			<td>9.5</td>'+
        '			<td>10</td>'+
        '			<td>10.5</td>'+
        '			<td>11</td>'+
        '			<td>11.5</td>'+
        '			<td>12</td>'+
        '			<td>12.5</td>'+
        '			<td>13</td>'+
        '			<td>13.5</td>'+
        '			<td>14</td>'+
        '		</tr>'+
        '	</tbody>'+
        '</table></div>'+
        '</div>'+
        '<div>'+
        '<h3 id="WomenFootwearReebok">Women\'s Footwear</h3>'+
        '<div style="overflow-x:auto;"><table>'+
        '	<tbody>'+
        '		<tr>'+
        '			<th>Size</th>'+
        '			<th>&nbsp; &nbsp; &nbsp;&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>USA</th>'+
        '			<td>5</td>'+
        '			<td>5.5</td>'+
        '			<td>6</td>'+
        '			<td>6.5</td>'+
        '			<td>7</td>'+
        '			<td>7.5</td>'+
        '			<td>8</td>'+
        '			<td>8.5</td>'+
        '			<td>9</td>'+
        '			<td>9.5</td>'+
        '			<td>10</td>'+
        '			<td>10.5</td>'+
        '			<td>11</td>'+
        '			<td>12</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Heel-Toe (in)</th>'+
        '			<td>8.7</td>'+
        '			<td>8.9</td>'+
        '			<td>9.1</td>'+
        '			<td>9.3</td>'+
        '			<td>9.4</td>'+
        '			<td>9.6</td>'+
        '			<td>9.8</td>'+
        '			<td>10</td>'+
        '			<td>10.3</td>'+
        '			<td>10.4</td>'+
        '			<td>10.6</td>'+
        '			<td>10.8</td>'+
        '			<td>11</td>'+
        '			<td>11.4</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>EUR</th>'+
        '			<td>35</td>'+
        '			<td>35.5</td>'+
        '			<td>36</td>'+
        '			<td>37</td>'+
        '			<td>37.5</td>'+
        '			<td>38</td>'+
        '			<td>38.5</td>'+
        '			<td>39</td>'+
        '			<td>40</td>'+
        '			<td>40.5</td>'+
        '			<td>41</td>'+
        '			<td>42</td>'+
        '			<td>42.5</td>'+
        '			<td>44</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>UK</th>'+
        '			<td>2.5</td>'+
        '			<td>3</td>'+
        '			<td>3.5</td>'+
        '			<td>4</td>'+
        '			<td>4.5</td>'+
        '			<td>5</td>'+
        '			<td>5.5</td>'+
        '			<td>6</td>'+
        '			<td>6.5</td>'+
        '			<td>7</td>'+
        '			<td>7.5</td>'+
        '			<td>8</td>'+
        '			<td>8.5</td>'+
        '			<td>9.5</td>'+
        '		</tr>'+
        '	</tbody>'+
        '</table></div>'+
        '</div>'+
        '<div>'+
        '<p><br><strong>Hint:</strong> For the most accurate results, measure yourself in your undergarments.</p>'+
        '<ul>'+
        '	<li><strong>Neck:</strong> Measure around the base of your neck, inserting your forefinger between the tape and your neck to allow ease in fit.</li>'+
        '	<li><strong>Chest:</strong> Measure around the fullest part of your chest, keeping tape firmly under your armpits and around your shoulder blades.</li>'+
        '	<li><strong>Waist:</strong> Measure around your waist, slightly below your natural waist, where you normally wear your pants. Insert your forefinger between the tape and your body to allow ease in fit.</li>'+
        '	<li><strong>Sleeve Length:</strong> Bend your arm slightly. Measure from center back neck, across your shoulder, down to your elbow, down to your wrist.</li>'+
        '	<li><strong>Hip:</strong> Measure around the fullest part of your hips, inserting your forefinger between the tape and your hip to allow ease in fit.</li>'+
        '	<li><strong>Inseam:</strong> Measure a similar pant that fits you well. Measure along the inseam, from the crotch seam to the bottom of the hem.</li>'+
        '	<li><strong>Gloves:</strong> Measure across palm of your hand from where your thumb and index finger meet.</li>'+
        '	<li><strong>Women\'s Boot Sizing:&nbsp;</strong> Military boots sized for women can be difficult to find. Below is a sizing chart on how to convert a men boot sizes to a women boot sizes.</li>'+
        '</ul>'+
        '<div style="overflow-x:auto;"><table border="0" cellpadding="1" cellspacing="1">'+
        '	<tbody>'+
        '		<tr>'+
        '			<td>'+
        '			<p><strong>Men\'s</strong></p>'+
        '			</td>'+
        '			<td>'+
        '			<p>4</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>4.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>5.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>6</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>6.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>7</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>7.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>8</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>8.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>9</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>9.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>10</p>'+
        '			</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<td>'+
        '			<p><strong>Women\'s</strong></p>'+
        '			</td>'+
        '			<td>'+
        '			<p>6</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>6.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>7</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>7.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>8</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>8.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>9</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>9.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>10</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>10.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>11</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>11.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>12</p>'+
        '			</td>'+
        '		</tr>'+
        '	</tbody>'+
        '</table>'+
        '</div>'+
        '</div>'+

        '</div>'+
        '</div>';
        //END



        //ROCKPORT
        document.getElementById('size-fit-more-brand').innerHTML += 
        '<div class="row sam-static-content-row sam-static-content-row-gray">'+
        '<div class="col-12">'+

        '<h2 id="sf_rockport">ROCKPORT SIZE CHARTS</h2>'+
        '<div>'+
        '<div>'+
        '<h3>Men\'s Footwear</h3>'+
        '<div style="overflow-x:auto;"><table>'+
        '	<tbody>'+
        '		<tr>'+
        '			<th>Size</th>'+
        '			<th>&nbsp; &nbsp; &nbsp;&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>USA</th>'+
        '			<td>6</td>'+
        '			<td>6.5</td>'+
        '			<td>7</td>'+
        '			<td>7.5</td>'+
        '			<td>8</td>'+
        '			<td>8.5</td>'+
        '			<td>9</td>'+
        '			<td>9.5</td>'+
        '			<td>10</td>'+
        '			<td>10.5</td>'+
        '			<td>11</td>'+
        '			<td>11.5</td>'+
        '			<td>12</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>UK</th>'+
        '			<td>5.5</td>'+
        '			<td>6</td>'+
        '			<td>6.5</td>'+
        '			<td>7</td>'+
        '			<td>7.5</td>'+
        '			<td>8</td>'+
        '			<td>8.5</td>'+
        '			<td>9</td>'+
        '			<td>9.5</td>'+
        '			<td>10</td>'+
        '			<td>10.5</td>'+
        '			<td>11</td>'+
        '			<td>11.5</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>EUR</th>'+
        '			<td>38.5</td>'+
        '			<td>39</td>'+
        '			<td>40</td>'+
        '			<td>40.5</td>'+
        '			<td>41</td>'+
        '			<td>42</td>'+
        '			<td>42.5</td>'+
        '			<td>43</td>'+
        '			<td>44</td>'+
        '			<td>44.5</td>'+
        '			<td>45</td>'+
        '			<td>46</td>'+
        '			<td>46.5</td>'+
        '		</tr>'+
        '	</tbody>'+
        '</table></div>'+
        '</div>'+
        '<div>'+
        '<p><br><strong>Hint:</strong> For the most accurate results, measure yourself in your undergarments.</p>'+
        '<ul>'+
        '	<li><strong>Neck:</strong> Measure around the base of your neck, inserting your forefinger between the tape and your neck to allow ease in fit.</li>'+
        '	<li><strong>Chest:</strong> Measure around the fullest part of your chest, keeping tape firmly under your armpits and around your shoulder blades.</li>'+
        '	<li><strong>Waist:</strong> Measure around your waist, slightly below your natural waist, where you normally wear your pants. Insert your forefinger between the tape and your body to allow ease in fit.</li>'+
        '	<li><strong>Sleeve Length:</strong> Bend your arm slightly. Measure from center back neck, across your shoulder, down to your elbow, down to your wrist.</li>'+
        '	<li><strong>Hip:</strong> Measure around the fullest part of your hips, inserting your forefinger between the tape and your hip to allow ease in fit.</li>'+
        '	<li><strong>Inseam:</strong> Measure a similar pant that fits you well. Measure along the inseam, from the crotch seam to the bottom of the hem.</li>'+
        '	<li><strong>Gloves:</strong> Measure across palm of your hand from where your thumb and index finger meet.</li>'+
        '</ul>'+
        '</div>'+
        '</div>'+

        '</div>'+
        '</div>';
        //END





        //ROCKY
        document.getElementById('size-fit-more-brand').innerHTML += 
        '<div class="row sam-static-content-row sam-static-content-row-gray">'+
        '<div class="col-12">'+

        '<h2 id="sf_rocky">ROCKY SIZE CHARTS</h2>'+
        '<div class="sizinginformation">'+
        '<div>'+
        '<h3>Footwear</h3>'+
        '<div style="overflow-x:auto;"><table>'+
        '	<tbody>'+
        '		<tr>'+
        '			<th>Size</th>'+
        '			<th>&nbsp; &nbsp; &nbsp;&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Men\'s</th>'+
        '			<td>3</td>'+
        '			<td>3.5</td>'+
        '			<td>4</td>'+
        '			<td>4.5</td>'+
        '			<td>5</td>'+
        '			<td>5.5</td>'+
        '			<td>6</td>'+
        '			<td>6.5</td>'+
        '			<td>7</td>'+
        '			<td>7.5</td>'+
        '			<td>8</td>'+
        '			<td>8.5</td>'+
        '			<td>9</td>'+
        '			<td>9.5</td>'+
        '			<td>10</td>'+
        '			<td>10.5</td>'+
        '			<td>11</td>'+
        '			<td>11.5</td>'+
        '			<td>12</td>'+
        '			<td>12.5</td>'+
        '			<td>13</td>'+
        '			<td>14</td>'+
        '			<td>15</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Women\'s</th>'+
        '			<td>4</td>'+
        '			<td>4.5</td>'+
        '			<td>5</td>'+
        '			<td>5.5</td>'+
        '			<td>6</td>'+
        '			<td>6.5</td>'+
        '			<td>7</td>'+
        '			<td>7.5</td>'+
        '			<td>8</td>'+
        '			<td>8.5</td>'+
        '			<td>9</td>'+
        '			<td>9.5</td>'+
        '			<td>10</td>'+
        '			<td>10.5</td>'+
        '			<td>11</td>'+
        '			<td>11.5</td>'+
        '			<td>12</td>'+
        '			<td>- -</td>'+
        '			<td>- -</td>'+
        '			<td>- -</td>'+
        '			<td>- -</td>'+
        '			<td>- -</td>'+
        '			<td>- -</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>UK</th>'+
        '			<td>2</td>'+
        '			<td>2.5</td>'+
        '			<td>3</td>'+
        '			<td>3.5</td>'+
        '			<td>4</td>'+
        '			<td>4.5</td>'+
        '			<td>5</td>'+
        '			<td>5.5</td>'+
        '			<td>6</td>'+
        '			<td>6.5</td>'+
        '			<td>7</td>'+
        '			<td>7.5</td>'+
        '			<td>8</td>'+
        '			<td>8.5</td>'+
        '			<td>9</td>'+
        '			<td>9.5</td>'+
        '			<td>10</td>'+
        '			<td>10.5</td>'+
        '			<td>11</td>'+
        '			<td>11.5</td>'+
        '			<td>12</td>'+
        '			<td>13</td>'+
        '			<td>14</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>EUR</th>'+
        '			<td>34</td>'+
        '			<td>35</td>'+
        '			<td>35.5</td>'+
        '			<td>36</td>'+
        '			<td>37</td>'+
        '			<td>37.5</td>'+
        '			<td>38</td>'+
        '			<td>39</td>'+
        '			<td>39.5</td>'+
        '			<td>40</td>'+
        '			<td>41</td>'+
        '			<td>41.5</td>'+
        '			<td>42</td>'+
        '			<td>42.5</td>'+
        '			<td>43</td>'+
        '			<td>44</td>'+
        '			<td>44.5</td>'+
        '			<td>45</td>'+
        '			<td>46</td>'+
        '			<td>46.5</td>'+
        '			<td>47</td>'+
        '			<td>47</td>'+
        '			<td>50</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>JPN (cm)</th>'+
        '			<td>21</td>'+
        '			<td>21.5</td>'+
        '			<td>22</td>'+
        '			<td>22.5</td>'+
        '			<td>23</td>'+
        '			<td>23.5</td>'+
        '			<td>24</td>'+
        '			<td>24.5</td>'+
        '			<td>25</td>'+
        '			<td>25.5</td>'+
        '			<td>26</td>'+
        '			<td>26.5</td>'+
        '			<td>27</td>'+
        '			<td>27.5</td>'+
        '			<td>28</td>'+
        '			<td>28.5</td>'+
        '			<td>29</td>'+
        '			<td>29.5</td>'+
        '			<td>30</td>'+
        '			<td>30.5</td>'+
        '			<td>31</td>'+
        '			<td>32</td>'+
        '			<td>33</td>'+
        '		</tr>'+
        '	</tbody>'+
        '</table></div>'+
        '</div>'+
        '<div>'+
        '<p><br><strong>Hint:</strong> For the most accurate results, measure yourself in your undergarments.</p>'+
        '<ul>'+
        '	<li><strong>Neck:</strong> Measure around the base of your neck, inserting your forefinger between the tape and your neck to allow ease in fit.</li>'+
        '	<li><strong>Chest:</strong> Measure around the fullest part of your chest, keeping tape firmly under your armpits and around your shoulder blades.</li>'+
        '	<li><strong>Waist:</strong> Measure around your waist, slightly below your natural waist, where you normally wear your pants. Insert your forefinger between the tape and your body to allow ease in fit.</li>'+
        '	<li><strong>Sleeve Length:</strong> Bend your arm slightly. Measure from center back neck, across your shoulder, down to your elbow, down to your wrist.</li>'+
        '	<li><strong>Hip:</strong> Measure around the fullest part of your hips, inserting your forefinger between the tape and your hip to allow ease in fit.</li>'+
        '	<li><strong>Inseam:</strong> Measure a similar pant that fits you well. Measure along the inseam, from the crotch seam to the bottom of the hem.</li>'+
        '	<li><strong>Gloves:</strong> Measure across palm of your hand from where your thumb and index finger meet.</li>'+
        '	<li><strong>Women\'s Boot Sizing:&nbsp;</strong> Military boots sized for women can be difficult to find. Below is a sizing chart on how to convert a men boot sizes to a women boot sizes.</li>'+
        '</ul>'+
        '<div style="overflow-x:auto;"><table border="0" cellpadding="1" cellspacing="1">'+
        '	<tbody>'+
        '		<tr>'+
        '			<td>'+
        '			<p><strong>Men\'s</strong></p>'+
        '			</td>'+
        '			<td>'+
        '			<p>4</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>4.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>5.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>6</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>6.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>7</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>7.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>8</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>8.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>9</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>9.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>10</p>'+
        '			</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<td>'+
        '			<p><strong>Women\'s</strong></p>'+
        '			</td>'+
        '			<td>'+
        '			<p>6</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>6.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>7</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>7.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>8</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>8.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>9</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>9.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>10</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>10.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>11</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>11.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>12</p>'+
        '			</td>'+
        '		</tr>'+
        '	</tbody>'+
        '</table></div>'+
        '</div>'+
        '</div>'+

        '</div>'+
        '</div>';
        //END



        //ROTHCO
        document.getElementById('size-fit-more-brand').innerHTML += 
        '<div class="row sam-static-content-row sam-static-content-row-gray">'+
        '<div class="col-12">'+

        '<h2 id="sf_rothco">ROTHCO SIZE CHARTS</h2>'+
        '<ul>'+
        '	<li><a href="#BeltRothco">Tactical Gloves</a></li>'+
        '	<li><a href="#HeadwearRothco">Headwear</a></li>'+
        '	<li><a href="#FootwearRothco">Footwear</a></li>'+
        '	<li><a href="#MensApparelRothco">Men\'s Apparel</a></li>'+
        '	<li><a href="#FlightsuitRothco">Flight suits</a></li>'+
        '	<li><a href="#M65Rothco">M-65 Jacket</a></li>'+
        '	<li><a href="#MA1Rothco">MA-1 Flight Jacket</a></li>'+
        '	<li><a href="#SoftshellRothco">Softshell Jacket</a></li>'+
        '</ul>'+
        '<div>'+
        '<div>'+
        '<h3 id="BeltRothco">Glove Size</h3>'+
        '<div style="overflow-x:auto;"><table>'+
        '	<tbody>'+
        '		<tr>'+
        '			<th>Size</th>'+
        '			<th>Small</th>'+
        '			<th>Medium</th>'+
        '			<th>Large</th>'+
        '			<th>X-Large</th>'+
        '			<th>2X-Large</th>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Measurement</th>'+
        '			<td>6.5 - 7</td>'+
        '			<td>7.5 - 8</td>'+
        '			<td>8.5 - 9</td>'+
        '			<td>9.5 - 10</td>'+
        '			<td>10.5 - 11</td>'+
        '		</tr>'+
        '	</tbody>'+
        '</table></div>'+
        '</div>'+
        '<div>'+
        '<h3 id="HeadwearRothco">Headwear</h3>'+
        '<div style="overflow-x:auto;"><table>'+
        '	<tbody>'+
        '		<tr>'+
        '			<th>Size</th>'+
        '			<th>X-Small</th>'+
        '			<th>Small</th>'+
        '			<th>Medium</th>'+
        '			<th>Large</th>'+
        '			<th>X-Large</th>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Hat</th>'+
        '			<td>6 1/2 - 6 3/4</td>'+
        '			<td>6 7/8 - 7</td>'+
        '			<td>7 1/8 - 7 1/4</td>'+
        '			<td>7 3/8 - 7 1/2</td>'+
        '			<td>7 5/8 - 7 3/4</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Head</th>'+
        '			<td>20 1/2 - 21 1/8</td>'+
        '			<td>21 1/2 - 21 7/8</td>'+
        '			<td>22 1/4 - 22 5/8</td>'+
        '			<td>23 - 23 1/2</td>'+
        '			<td>24 - 24 3/8</td>'+
        '		</tr>'+
        '	</tbody>'+
        '</table></div>'+
        '</div>'+
        '<div>'+
        '<h3 id="FootwearRothco">Footwear</h3>'+
        '<div style="overflow-x:auto;"><table>'+
        '	<tbody>'+
        '		<tr>'+
        '			<th>Size</th>'+
        '			<th>&nbsp; &nbsp; &nbsp;&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Men\'s</th>'+
        '			<td>3</td>'+
        '			<td>3.5</td>'+
        '			<td>4</td>'+
        '			<td>4.5</td>'+
        '			<td>5</td>'+
        '			<td>5.5</td>'+
        '			<td>6</td>'+
        '			<td>6.5</td>'+
        '			<td>7</td>'+
        '			<td>7.5</td>'+
        '			<td>8</td>'+
        '			<td>8.5</td>'+
        '			<td>9</td>'+
        '			<td>9.5</td>'+
        '			<td>10</td>'+
        '			<td>11</td>'+
        '			<td>12</td>'+
        '			<td>13</td>'+
        '			<td>14</td>'+
        '			<td>15</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Women\'s</th>'+
        '			<td>5</td>'+
        '			<td>5.5</td>'+
        '			<td>6</td>'+
        '			<td>6.5</td>'+
        '			<td>7</td>'+
        '			<td>7.5</td>'+
        '			<td>8</td>'+
        '			<td>8.5</td>'+
        '			<td>9</td>'+
        '			<td>9.5</td>'+
        '			<td>10</td>'+
        '			<td>10.5</td>'+
        '			<td>11</td>'+
        '			<td>11.5</td>'+
        '			<td>12</td>'+
        '			<td>- -</td>'+
        '			<td>- -</td>'+
        '			<td>- -</td>'+
        '			<td>- -</td>'+
        '			<td>- -</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>EU</th>'+
        '			<td>36</td>'+
        '			<td>36.5</td>'+
        '			<td>37</td>'+
        '			<td>37.5</td>'+
        '			<td>38</td>'+
        '			<td>38.5</td>'+
        '			<td>39</td>'+
        '			<td>39.5</td>'+
        '			<td>40</td>'+
        '			<td>40.5</td>'+
        '			<td>41</td>'+
        '			<td>41.5</td>'+
        '			<td>42</td>'+
        '			<td>42.5</td>'+
        '			<td>43</td>'+
        '			<td>43..5</td>'+
        '			<td>44</td>'+
        '			<td>45</td>'+
        '			<td>46</td>'+
        '			<td>47</td>'+
        '		</tr>'+
        '	</tbody>'+
        '</table></div>'+
        '</div>'+
        '<div>'+
        '<h3 id="MensApparelRothco">Men\'s Apparel</h3>'+
        '<div style="overflow-x:auto;"><table>'+
        '	<tbody>'+
        '		<tr>'+
        '			<th>Size</th>'+
        '			<th>&nbsp; &nbsp;X-Small&nbsp; &nbsp;</th>'+
        '			<th>Small</th>'+
        '			<th>Medium</th>'+
        '			<th>Large</th>'+
        '			<th>X-Large</th>'+
        '			<th>2X-Large</th>'+
        '			<th>3X-Large</th>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Chest</th>'+
        '			<td>29 - 33</td>'+
        '			<td>33 - 37</td>'+
        '			<td>37 - 41</td>'+
        '			<td>41 - 45</td>'+
        '			<td>45 - 49</td>'+
        '			<td>49 - 53</td>'+
        '			<td>53 - 57</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Waist</th>'+
        '			<td>23 - 27</td>'+
        '			<td>27 - 31</td>'+
        '			<td>31 - 35</td>'+
        '			<td>35 - 39</td>'+
        '			<td>39 - 43</td>'+
        '			<td>43 - 47</td>'+
        '			<td>47 - 51</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Hip</th>'+
        '			<td>40</td>'+
        '			<td>44</td>'+
        '			<td>48</td>'+
        '			<td>52</td>'+
        '			<td>56</td>'+
        '			<td>60</td>'+
        '			<td>64</td>'+
        '		</tr>'+
        '	</tbody>'+
        '</table></div>'+
        '</div>'+
        '<div>'+
        '<h3 id="FlightsuitRothco">Flight Suits</h3>'+
        '<div style="overflow-x:auto;"><table>'+
        '	<tbody>'+
        '		<tr>'+
        '			<th>Size</th>'+
        '			<th>Small</th>'+
        '			<th>Medium</th>'+
        '			<th>Large</th>'+
        '			<th>X-Large</th>'+
        '			<th>2X-Large</th>'+
        '			<th>3X-Large</th>'+
        '			<th>4X-Large</th>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Chest</th>'+
        '			<td>23 3/4</td>'+
        '			<td>24</td>'+
        '			<td>25</td>'+
        '			<td>26</td>'+
        '			<td>27</td>'+
        '			<td>28</td>'+
        '			<td>29</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Sleeve Length</th>'+
        '			<td>23 1/4</td>'+
        '			<td>23 1/2</td>'+
        '			<td>24</td>'+
        '			<td>24 1/2</td>'+
        '			<td>25</td>'+
        '			<td>25 1/4</td>'+
        '			<td>25 1/2</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Inseam</th>'+
        '			<td>30</td>'+
        '			<td>30 3/4</td>'+
        '			<td>31 1/2</td>'+
        '			<td>32 1/2</td>'+
        '			<td>33</td>'+
        '			<td>34</td>'+
        '			<td>34 3/4</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Waist</th>'+
        '			<td>21 3/4</td>'+
        '			<td>23</td>'+
        '			<td>24</td>'+
        '			<td>24</td>'+
        '			<td>26 1/2</td>'+
        '			<td>27 1/2</td>'+
        '			<td>28 3/4</td>'+
        '		</tr>'+
        '	</tbody>'+
        '</table></div>'+
        '</div>'+
        '<div>'+
        '<h3 id="M65Rothco">M-65 Jacket</h3>'+
        '<div style="overflow-x:auto;"><table>'+
        '	<tbody>'+
        '		<tr>'+
        '			<th>Size</th>'+
        '			<th>X-Small</th>'+
        '			<th>Small</th>'+
        '			<th>Medium</th>'+
        '			<th>Large</th>'+
        '			<th>X-Large</th>'+
        '			<th>2X-Large</th>'+
        '			<th>3X-Large</th>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Chest Width</th>'+
        '			<td>22</td>'+
        '			<td>23</td>'+
        '			<td>25</td>'+
        '			<td>26 1/2</td>'+
        '			<td>28</td>'+
        '			<td>29 1/2</td>'+
        '			<td>31</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Sleeve Length</th>'+
        '			<td>31</td>'+
        '			<td>31 1/2</td>'+
        '			<td>32 1/2</td>'+
        '			<td>33</td>'+
        '			<td>34</td>'+
        '			<td>35</td>'+
        '			<td>35 1/2</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Back</th>'+
        '			<td>31</td>'+
        '			<td>31 1/2</td>'+
        '			<td>32 1/2</td>'+
        '			<td>33</td>'+
        '			<td>34</td>'+
        '			<td>34 1/2</td>'+
        '			<td>35 1/2</td>'+
        '		</tr>'+
        '	</tbody>'+
        '</table></div>'+
        '<h3 id="MA1Rothco">MA-1 Flight Jacket</h3>'+
        '<div style="overflow-x:auto;"><table>'+
        '	<tbody>'+
        '		<tr>'+
        '			<th>Size</th>'+
        '			<th>&nbsp; X-Small</th>'+
        '			<th>Small</th>'+
        '			<th>Medium</th>'+
        '			<th>Large</th>'+
        '			<th>X-Large</th>'+
        '			<th>2X-Large</th>'+
        '			<th>3X-Large</th>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Chest Width</th>'+
        '			<td>25</td>'+
        '			<td>25 1/2</td>'+
        '			<td>26 1/2</td>'+
        '			<td>27</td>'+
        '			<td>28</td>'+
        '			<td>29</td>'+
        '			<td>29 1/2</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Sleeve Length</th>'+
        '			<td>25</td>'+
        '			<td>25 1/2</td>'+
        '			<td>26 1/2</td>'+
        '			<td>27</td>'+
        '			<td>28</td>'+
        '			<td>29</td>'+
        '			<td>29 1/2</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Back</th>'+
        '			<td>25</td>'+
        '			<td>26</td>'+
        '			<td>27</td>'+
        '			<td>27 1/2</td>'+
        '			<td>28 1/2</td>'+
        '			<td>29</td>'+
        '			<td>30</td>'+
        '		</tr>'+
        '	</tbody>'+
        '</table></div>'+
        '</div>'+
        '<div>'+
        '<h3 id="SoftshellRothco">Rothco Softshell Jacket</h3>'+
        '<div style="overflow-x:auto;"><table>'+
        '	<tbody>'+
        '		<tr>'+
        '			<th>Size</th>'+
        '			<th>&nbsp; &nbsp;X-Small&nbsp; &nbsp;</th>'+
        '			<th>Small</th>'+
        '			<th>Medium</th>'+
        '			<th>Large</th>'+
        '			<th>X-Large</th>'+
        '			<th>2X-Large</th>'+
        '			<th>3X-Large</th>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Chest Width</th>'+
        '			<td>21 1/2</td>'+
        '			<td>22 3/8</td>'+
        '			<td>23 5/8</td>'+
        '			<td>24 1/2</td>'+
        '			<td>26</td>'+
        '			<td>27 1/8</td>'+
        '			<td>28 1/4</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Sleeve Length</th>'+
        '			<td>24 3/4</td>'+
        '			<td>25 1/2</td>'+
        '			<td>26 1/4</td>'+
        '			<td>27</td>'+
        '			<td>28</td>'+
        '			<td>28 3/4</td>'+
        '			<td>29 1/2</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Length</th>'+
        '			<td>25</td>'+
        '			<td>26</td>'+
        '			<td>27</td>'+
        '			<td>28</td>'+
        '			<td>29</td>'+
        '			<td>30</td>'+
        '			<td>31</td>'+
        '		</tr>'+
        '	</tbody>'+
        '</table>'+
        '</div>'+
        '<div>'+
        '<p><br><strong>Hint:</strong> For the most accurate results, measure yourself in your undergarments.</p>'+
        '<ul>'+
        '	<li><strong>Neck:</strong> Measure around the base of your neck, inserting your forefinger between the tape and your neck to allow ease in fit.</li>'+
        '	<li><strong>Chest:</strong> Measure around the fullest part of your chest, keeping tape firmly under your armpits and around your shoulder blades.</li>'+
        '	<li><strong>Waist:</strong> Measure around your waist, slightly below your natural waist, where you normally wear your pants. Insert your forefinger between the tape and your body to allow ease in fit.</li>'+
        '	<li><strong>Sleeve Length:</strong> Bend your arm slightly. Measure from center back neck, across your shoulder, down to your elbow, down to your wrist.</li>'+
        '	<li><strong>Hip:</strong> Measure around the fullest part of your hips, inserting your forefinger between the tape and your hip to allow ease in fit.</li>'+
        '	<li><strong>Inseam:</strong> Measure a similar pant that fits you well. Measure along the inseam, from the crotch seam to the bottom of the hem.</li>'+
        '	<li><strong>Gloves:</strong> Measure across palm of your hand from where your thumb and index finger meet.</li>'+
        '	<li><strong>Women\'s Boot Sizing:&nbsp;</strong> Military boots sized for women can be difficult to find. Below is a sizing chart on how to convert a men boot sizes to a women boot sizes.</li>'+
        '</ul>'+
        '<div style="overflow-x:auto;"><table border="0" cellpadding="1" cellspacing="1">'+
        '	<tbody>'+
        '		<tr>'+
        '			<td>'+
        '			<p><strong>Men\'s</strong></p>'+
        '			</td>'+
        '			<td>'+
        '			<p>4</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>4.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>5.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>6</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>6.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>7</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>7.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>8</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>8.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>9</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>9.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>10</p>'+
        '			</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<td>'+
        '			<p><strong>Women\'s</strong></p>'+
        '			</td>'+
        '			<td>'+
        '			<p>6</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>6.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>7</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>7.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>8</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>8.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>9</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>9.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>10</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>10.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>11</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>11.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>12</p>'+
        '			</td>'+
        '		</tr>'+
        '	</tbody>'+
        '</table></div>'+
        '</div>'+
        '</div>'+

        '</div>'+
        '</div>';
        //END






        //SALOMON
        document.getElementById('size-fit-more-brand').innerHTML += 
        '<div class="row sam-static-content-row sam-static-content-row-gray">'+
        '<div class="col-12">'+

        '<h2 id="sf_salomon">SALOMON SIZE CHARTS</h2>'+
        '<div>'+
        '<div>'+
        '<h3>Men\'s Footwear</h3>'+
        '<div style="overflow-x:auto;"><table>'+
        '	<tbody>'+
        '		<tr>'+
        '			<th>Size</th>'+
        '			<th>&nbsp; &nbsp; &nbsp;&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>USA</th>'+
        '			<td>7</td>'+
        '			<td>7.5</td>'+
        '			<td>8</td>'+
        '			<td>8.5</td>'+
        '			<td>9</td>'+
        '			<td>9.5</td>'+
        '			<td>10</td>'+
        '			<td>10.5</td>'+
        '			<td>11</td>'+
        '			<td>11.5</td>'+
        '			<td>12</td>'+
        '			<td>12.5</td>'+
        '			<td>13</td>'+
        '			<td>13.5</td>'+
        '			<td>14</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>UK</th>'+
        '			<td>6.5</td>'+
        '			<td>7</td>'+
        '			<td>7.5</td>'+
        '			<td>8</td>'+
        '			<td>8.5</td>'+
        '			<td>9</td>'+
        '			<td>9.5</td>'+
        '			<td>10</td>'+
        '			<td>10.5</td>'+
        '			<td>11</td>'+
        '			<td>11.5</td>'+
        '			<td>12</td>'+
        '			<td>12.5</td>'+
        '			<td>13</td>'+
        '			<td>13.5</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>EU</th>'+
        '			<td>40</td>'+
        '			<td>40.7</td>'+
        '			<td>41.3</td>'+
        '			<td>42</td>'+
        '			<td>42.7</td>'+
        '			<td>43.3</td>'+
        '			<td>44</td>'+
        '			<td>44.7</td>'+
        '			<td>45.3</td>'+
        '			<td>46</td>'+
        '			<td>46.7</td>'+
        '			<td>47.3</td>'+
        '			<td>48</td>'+
        '			<td>48.7</td>'+
        '			<td>49.3</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>JPN</th>'+
        '			<td>25</td>'+
        '			<td>25.5</td>'+
        '			<td>26</td>'+
        '			<td>26.5</td>'+
        '			<td>27</td>'+
        '			<td>27.5</td>'+
        '			<td>28</td>'+
        '			<td>28.5</td>'+
        '			<td>29</td>'+
        '			<td>29.5</td>'+
        '			<td>30</td>'+
        '			<td>30.5</td>'+
        '			<td>31</td>'+
        '			<td>31.5</td>'+
        '			<td>32</td>'+
        '		</tr>'+
        '	</tbody>'+
        '</table></div>'+
        '</div>'+
        '<div>'+
        '<p><br><strong>Hint:</strong> For the most accurate results, measure yourself in your undergarments.</p>'+
        '<ul>'+
        '	<li><strong>Neck:</strong> Measure around the base of your neck, inserting your forefinger between the tape and your neck to allow ease in fit.</li>'+
        '	<li><strong>Chest:</strong> Measure around the fullest part of your chest, keeping tape firmly under your armpits and around your shoulder blades.</li>'+
        '	<li><strong>Waist:</strong> Measure around your waist, slightly below your natural waist, where you normally wear your pants. Insert your forefinger between the tape and your body to allow ease in fit.</li>'+
        '	<li><strong>Sleeve Length:</strong> Bend your arm slightly. Measure from center back neck, across your shoulder, down to your elbow, down to your wrist.</li>'+
        '	<li><strong>Hip:</strong> Measure around the fullest part of your hips, inserting your forefinger between the tape and your hip to allow ease in fit.</li>'+
        '	<li><strong>Inseam:</strong> Measure a similar pant that fits you well. Measure along the inseam, from the crotch seam to the bottom of the hem.</li>'+
        '	<li><strong>Gloves:</strong> Measure across palm of your hand from where your thumb and index finger meet.</li>'+
        '	<li><strong>Women\'s Boot Sizing:&nbsp;</strong> Military boots sized for women can be difficult to find. Below is a sizing chart on how to convert a men boot sizes to a women boot sizes.</li>'+
        '</ul>'+
        '<div style="overflow-x:auto;"><table border="0" cellpadding="1" cellspacing="1">'+
        '	<tbody>'+
        '		<tr>'+
        '			<td>'+
        '			<p><strong>Men\'s</strong></p>'+
        '			</td>'+
        '			<td>'+
        '			<p>4</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>4.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>5.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>6</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>6.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>7</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>7.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>8</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>8.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>9</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>9.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>10</p>'+
        '			</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<td>'+
        '			<p><strong>Women\'s</strong></p>'+
        '			</td>'+
        '			<td>'+
        '			<p>6</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>6.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>7</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>7.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>8</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>8.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>9</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>9.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>10</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>10.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>11</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>11.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>12</p>'+
        '			</td>'+
        '		</tr>'+
        '	</tbody>'+
        '</table></div>'+
        '</div>'+
        '</div>'+

        '</div>'+
        '</div>';
        //END







        //SOFFE
        document.getElementById('size-fit-more-brand').innerHTML += 
        '<div class="row sam-static-content-row sam-static-content-row-gray">'+
        '<div class="col-12">'+

        '<h2 id="sf_soffe">SOFFE SIZE CHARTS</h2>'+
        '<ul>'+
        '	<li><a href="#MenSoffe">Men\'s Apparel</a></li>'+
        '	<li><a href="#WomenSoffe">Women\'s Apparel</a></li>'+
        '</ul>'+
        '<div>'+
        '<div>'+
        '<h3 id="MenSoffe">Men\'s Apparel</h3>'+
        '<div style="overflow-x:auto;"><table>'+
        '	<tbody>'+
        '		<tr>'+
        '			<th>Size</th>'+
        '			<th>Small</th>'+
        '			<th>Medium</th>'+
        '			<th>Large</th>'+
        '			<th>X-Large</th>'+
        '			<th>2X-Large</th>'+
        '			<th>3X-Large</th>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Chest</th>'+
        '			<td>34 - 36</td>'+
        '			<td>38 - 40</td>'+
        '			<td>42 - 44</td>'+
        '			<td>46 - 48</td>'+
        '			<td>50 - 52</td>'+
        '			<td>54 - 56</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Waist</th>'+
        '			<td>28 - 30</td>'+
        '			<td>32 - 34</td>'+
        '			<td>36 - 38</td>'+
        '			<td>40 - 42</td>'+
        '			<td>44 - 46</td>'+
        '			<td>48 - 52</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Hip</th>'+
        '			<td>34 - 36</td>'+
        '			<td>38 - 40</td>'+
        '			<td>42 - 44</td>'+
        '			<td>46 - 48</td>'+
        '			<td>50 - 52</td>'+
        '			<td>54 - 56</td>'+
        '		</tr>'+
        '	</tbody>'+
        '</table></div>'+
        '</div>'+
        '<div>'+
        '<h3 id="WomenSoffe">Women\'s Apparel</h3>'+
        '<div style="overflow-x:auto;"><table>'+
        '	<tbody>'+
        '		<tr>'+
        '			<th>Size</th>'+
        '			<th>&nbsp; X-Small&nbsp; &nbsp;&nbsp;</th>'+
        '			<th>Small</th>'+
        '			<th>Medium</th>'+
        '			<th>Large</th>'+
        '			<th>X-Large</th>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Bust</th>'+
        '			<td>31 - 32</td>'+
        '			<td>33 - 34</td>'+
        '			<td>35 - 36</td>'+
        '			<td>37 - 38.5</td>'+
        '			<td>41</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Waist</th>'+
        '			<td>24 - 25</td>'+
        '			<td>26 - 27</td>'+
        '			<td>28 - 29</td>'+
        '			<td>30 - 31.5</td>'+
        '			<td>33</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Hip</th>'+
        '			<td>33.5 - 34.5</td>'+
        '			<td>35 .5 - 36.5</td>'+
        '			<td>37.5 - 38.5</td>'+
        '			<td>39 - 41</td>'+
        '			<td>43.5</td>'+
        '		</tr>'+
        '	</tbody>'+
        '</table></div>'+
        '</div>'+
        '<div>'+
        '<p><br><strong>Hint:</strong> For the most accurate results, measure yourself in your undergarments.</p>'+
        '<ul>'+
        '	<li><strong>Neck:</strong> Measure around the base of your neck, inserting your forefinger between the tape and your neck to allow ease in fit.</li>'+
        '	<li><strong>Chest:</strong> Measure around the fullest part of your chest, keeping tape firmly under your armpits and around your shoulder blades.</li>'+
        '	<li><strong>Waist:</strong> Measure around your waist, slightly below your natural waist, where you normally wear your pants. Insert your forefinger between the tape and your body to allow ease in fit.</li>'+
        '	<li><strong>Sleeve Length:</strong> Bend your arm slightly. Measure from center back neck, across your shoulder, down to your elbow, down to your wrist.</li>'+
        '	<li><strong>Hip:</strong> Measure around the fullest part of your hips, inserting your forefinger between the tape and your hip to allow ease in fit.</li>'+
        '	<li><strong>Inseam:</strong> Measure a similar pant that fits you well. Measure along the inseam, from the crotch seam to the bottom of the hem.</li>'+
        '	<li><strong>Gloves:</strong> Measure across palm of your hand from where your thumb and index finger meet.</li>'+
        '</ul>'+
        '</div>'+
        '</div>'+

        '</div>'+
        '</div>';
        //END





        //SPEC OPS
        document.getElementById('size-fit-more-brand').innerHTML += 
        '<div class="row sam-static-content-row sam-static-content-row-gray">'+
        '<div class="col-12">'+

        '<h2 id="sf_specops">SPEC OPS SIZE CHARTS</h2>'+
        '<div>'+
        '<div>'+
        '<h3>Belts Size</h3>'+
        '<div style="overflow-x:auto;"><table>'+
        '	<tbody>'+
        '		<tr>'+
        '			<th>Size</th>'+
        '			<th>Medium</th>'+
        '			<th>Large</th>'+
        '			<th>X-Large</th>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Waist (in)</th>'+
        '			<td>24 - 34</td>'+
        '			<td>34 - 40</td>'+
        '			<td>40 - 46</td>'+
        '		</tr>'+
        '	</tbody>'+
        '</table></div>'+
        '</div>'+
        '<div>'+
        '<p><br><strong>Hint:</strong> For the most accurate results, measure yourself in your undergarments.</p>'+
        '<ul>'+
        '	<li><strong>Neck:</strong> Measure around the base of your neck, inserting your forefinger between the tape and your neck to allow ease in fit.</li>'+
        '	<li><strong>Chest:</strong> Measure around the fullest part of your chest, keeping tape firmly under your armpits and around your shoulder blades.</li>'+
        '	<li><strong>Waist:</strong> Measure around your waist, slightly below your natural waist, where you normally wear your pants. Insert your forefinger between the tape and your body to allow ease in fit.</li>'+
        '	<li><strong>Sleeve Length:</strong> Bend your arm slightly. Measure from center back neck, across your shoulder, down to your elbow, down to your wrist.</li>'+
        '	<li><strong>Hip:</strong> Measure around the fullest part of your hips, inserting your forefinger between the tape and your hip to allow ease in fit.</li>'+
        '	<li><strong>Inseam:</strong> Measure a similar pant that fits you well. Measure along the inseam, from the crotch seam to the bottom of the hem.</li>'+
        '	<li><strong>Gloves:</strong> Measure across palm of your hand from where your thumb and index finger meet.</li>'+
        '</ul>'+
        '</div>'+
        '</div>'+

        '</div>'+
        '</div>';
        //END




        //TACTICAL RESEARCH
        document.getElementById('size-fit-more-brand').innerHTML += 
        '<div class="row sam-static-content-row sam-static-content-row-gray">'+
        '<div class="col-12">'+

        '<h2 id="sf_tacticalresearch">TACTICAL RESEARCH SIZE CHARTS</h2>'+
        '<div>'+
        '<div>'+
        '<h3>Footwear Size</h3>'+
        '<div style="overflow-x:auto;"><table>'+
        '	<tbody>'+
        '		<tr>'+
        '			<th>Width</th>'+
        '			<th>B</th>'+
        '			<th>D</th>'+
        '			<th>EE</th>'+
        '			<th>EEEE</th>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>TR Width</th>'+
        '			<td>Narrow</td>'+
        '			<td>Regular</td>'+
        '			<td>Wide</td>'+
        '			<td>Extra Wide</td>'+
        '		</tr>'+
        '	</tbody>'+
        '</table></div>'+
        '</div>'+
        '<div>'+
        '<p><br><strong>Hint:</strong> For the most accurate results, measure yourself in your undergarments.</p>'+
        '<ul>'+
        '	<li><strong>Neck:</strong> Measure around the base of your neck, inserting your forefinger between the tape and your neck to allow ease in fit.</li>'+
        '	<li><strong>Chest:</strong> Measure around the fullest part of your chest, keeping tape firmly under your armpits and around your shoulder blades.</li>'+
        '	<li><strong>Waist:</strong> Measure around your waist, slightly below your natural waist, where you normally wear your pants. Insert your forefinger between the tape and your body to allow ease in fit.</li>'+
        '	<li><strong>Sleeve Length:</strong> Bend your arm slightly. Measure from center back neck, across your shoulder, down to your elbow, down to your wrist.</li>'+
        '	<li><strong>Hip:</strong> Measure around the fullest part of your hips, inserting your forefinger between the tape and your hip to allow ease in fit.</li>'+
        '	<li><strong>Inseam:</strong> Measure a similar pant that fits you well. Measure along the inseam, from the crotch seam to the bottom of the hem.</li>'+
        '	<li><strong>Gloves:</strong> Measure across palm of your hand from where your thumb and index finger meet.</li>'+
        '	<li><strong>Women\'s Boot Sizing:&nbsp;</strong> Military boots sized for women can be difficult to find. Below is a sizing chart on how to convert a men boot sizes to a women boot sizes.</li>'+
        '</ul>'+
        '<div style="overflow-x:auto;"><table border="0" cellpadding="1" cellspacing="1">'+
        '	<tbody>'+
        '		<tr>'+
        '			<td>'+
        '			<p><strong>Men\'s</strong></p>'+
        '			</td>'+
        '			<td>'+
        '			<p>4</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>4.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>5.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>6</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>6.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>7</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>7.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>8</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>8.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>9</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>9.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>10</p>'+
        '			</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<td>'+
        '			<p><strong>Women\'s</strong></p>'+
        '			</td>'+
        '			<td>'+
        '			<p>6</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>6.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>7</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>7.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>8</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>8.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>9</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>9.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>10</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>10.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>11</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>11.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>12</p>'+
        '			</td>'+
        '		</tr>'+
        '	</tbody>'+
        '</table></div>'+
        '</div>'+
        '</div>'+

        '</div>'+
        '</div>';
        //END





        //THOROGOOD
        document.getElementById('size-fit-more-brand').innerHTML += 
        '<div class="row sam-static-content-row sam-static-content-row-gray">'+
        '<div class="col-12">'+

        '<h2 id="sf_thorogood">THOROGOOD SIZE CHARTS</h2>'+
        '<div>'+
        '<div>'+
        '<h3>Men\'s Footwear</h3>'+
        '<div style="overflow-x:auto;"><table>'+
        '	<tbody>'+
        '		<tr>'+
        '			<th>Size</th>'+
        '			<th>&nbsp; &nbsp; &nbsp;&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>USA</th>'+
        '			<td>7</td>'+
        '			<td>7.5</td>'+
        '			<td>8</td>'+
        '			<td>8.5</td>'+
        '			<td>9</td>'+
        '			<td>9.5</td>'+
        '			<td>10</td>'+
        '			<td>10.5</td>'+
        '			<td>11</td>'+
        '			<td>12</td>'+
        '			<td>13</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>UK</th>'+
        '			<td>6</td>'+
        '			<td>6.5</td>'+
        '			<td>7</td>'+
        '			<td>7.5</td>'+
        '			<td>8</td>'+
        '			<td>8.5</td>'+
        '			<td>9</td>'+
        '			<td>9.5</td>'+
        '			<td>10</td>'+
        '			<td>11</td>'+
        '			<td>12</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>EU</th>'+
        '			<td>40</td>'+
        '			<td>40.5</td>'+
        '			<td>41</td>'+
        '			<td>41.5</td>'+
        '			<td>42</td>'+
        '			<td>42.5</td>'+
        '			<td>43</td>'+
        '			<td>43.5</td>'+
        '			<td>44</td>'+
        '			<td>45</td>'+
        '			<td>46</td>'+
        '		</tr>'+
        '	</tbody>'+
        '</table></div>'+
        '</div>'+
        '<div>'+
        '<p><br><strong>Hint:</strong> For the most accurate results, measure yourself in your undergarments.</p>'+
        '<ul>'+
        '	<li><strong>Neck:</strong> Measure around the base of your neck, inserting your forefinger between the tape and your neck to allow ease in fit.</li>'+
        '	<li><strong>Chest:</strong> Measure around the fullest part of your chest, keeping tape firmly under your armpits and around your shoulder blades.</li>'+
        '	<li><strong>Waist:</strong> Measure around your waist, slightly below your natural waist, where you normally wear your pants. Insert your forefinger between the tape and your body to allow ease in fit.</li>'+
        '	<li><strong>Sleeve Length:</strong> Bend your arm slightly. Measure from center back neck, across your shoulder, down to your elbow, down to your wrist.</li>'+
        '	<li><strong>Hip:</strong> Measure around the fullest part of your hips, inserting your forefinger between the tape and your hip to allow ease in fit.</li>'+
        '	<li><strong>Inseam:</strong> Measure a similar pant that fits you well. Measure along the inseam, from the crotch seam to the bottom of the hem.</li>'+
        '	<li><strong>Gloves:</strong> Measure across palm of your hand from where your thumb and index finger meet.</li>'+
        '	<li><strong>Women\'s Boot Sizing:&nbsp;</strong> Military boots sized for women can be difficult to find. Below is a sizing chart on how to convert a men boot sizes to a women boot sizes.</li>'+
        '</ul>'+
        '<div style="overflow-x:auto;"><table border="0" cellpadding="1" cellspacing="1">'+
        '	<tbody>'+
        '		<tr>'+
        '			<td>'+
        '			<p><strong>Men\'s</strong></p>'+
        '			</td>'+
        '			<td>'+
        '			<p>4</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>4.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>5.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>6</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>6.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>7</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>7.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>8</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>8.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>9</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>9.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>10</p>'+
        '			</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<td>'+
        '			<p><strong>Women\'s</strong></p>'+
        '			</td>'+
        '			<td>'+
        '			<p>6</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>6.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>7</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>7.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>8</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>8.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>9</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>9.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>10</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>10.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>11</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>11.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>12</p>'+
        '			</td>'+
        '		</tr>'+
        '	</tbody>'+
        '</table></div>'+
        '</div>'+
        '</div>'+

        '</div>'+
        '</div>';
        //END






        //TIMBERLAND PRO
        document.getElementById('size-fit-more-brand').innerHTML += 
        '<div class="row sam-static-content-row sam-static-content-row-gray">'+
        '<div class="col-12">'+

        '<h2 id="sf_timberlandpro">TIMBERLAND PRO SIZE CHARTS</h2>'+
        '<div>'+
        '<div>'+
        '<h3>Men\'s Footwear</h3>'+
        '<div style="overflow-x:auto;"><table>'+
        '	<tbody>'+
        '		<tr>'+
        '			<th>Size</th>'+
        '			<th>&nbsp; &nbsp; &nbsp;&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>USA</th>'+
        '			<td>6</td>'+
        '			<td>6.5</td>'+
        '			<td>7</td>'+
        '			<td>7.5</td>'+
        '			<td>8</td>'+
        '			<td>8.5</td>'+
        '			<td>9</td>'+
        '			<td>9.5</td>'+
        '			<td>10</td>'+
        '			<td>10.5</td>'+
        '			<td>11</td>'+
        '			<td>11.5</td>'+
        '			<td>12</td>'+
        '			<td>13</td>'+
        '			<td>14</td>'+
        '			<td>15</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>UK</th>'+
        '			<td>5</td>'+
        '			<td>5.5</td>'+
        '			<td>6</td>'+
        '			<td>6.5</td>'+
        '			<td>7</td>'+
        '			<td>7.5</td>'+
        '			<td>8</td>'+
        '			<td>8.5</td>'+
        '			<td>9</td>'+
        '			<td>9.5</td>'+
        '			<td>10</td>'+
        '			<td>10.5</td>'+
        '			<td>11</td>'+
        '			<td>12</td>'+
        '			<td>13</td>'+
        '			<td>14</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>EU</th>'+
        '			<td>38</td>'+
        '			<td>38.5</td>'+
        '			<td>39</td>'+
        '			<td>40</td>'+
        '			<td>41</td>'+
        '			<td>41.5</td>'+
        '			<td>42</td>'+
        '			<td>42.5</td>'+
        '			<td>43</td>'+
        '			<td>43.5</td>'+
        '			<td>44</td>'+
        '			<td>45</td>'+
        '			<td>46</td>'+
        '			<td>47</td>'+
        '			<td>48</td>'+
        '			<td>49</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>JPN</th>'+
        '			<td>24</td>'+
        '			<td>24.5</td>'+
        '			<td>25</td>'+
        '			<td>25.5</td>'+
        '			<td>26</td>'+
        '			<td>26.5</td>'+
        '			<td>27</td>'+
        '			<td>27.5</td>'+
        '			<td>28</td>'+
        '			<td>28.5</td>'+
        '			<td>29</td>'+
        '			<td>29.5</td>'+
        '			<td>30</td>'+
        '			<td>31</td>'+
        '			<td>32</td>'+
        '			<td>33</td>'+
        '		</tr>'+
        '	</tbody>'+
        '</table></div>'+
        '</div>'+
        '<div>'+
        '<p><br><strong>Hint:</strong> For the most accurate results, measure yourself in your undergarments.</p>'+
        '<ul>'+
        '	<li><strong>Neck:</strong> Measure around the base of your neck, inserting your forefinger between the tape and your neck to allow ease in fit.</li>'+
        '	<li><strong>Chest:</strong> Measure around the fullest part of your chest, keeping tape firmly under your armpits and around your shoulder blades.</li>'+
        '	<li><strong>Waist:</strong> Measure around your waist, slightly below your natural waist, where you normally wear your pants. Insert your forefinger between the tape and your body to allow ease in fit.</li>'+
        '	<li><strong>Sleeve Length:</strong> Bend your arm slightly. Measure from center back neck, across your shoulder, down to your elbow, down to your wrist.</li>'+
        '	<li><strong>Hip:</strong> Measure around the fullest part of your hips, inserting your forefinger between the tape and your hip to allow ease in fit.</li>'+
        '	<li><strong>Inseam:</strong> Measure a similar pant that fits you well. Measure along the inseam, from the crotch seam to the bottom of the hem.</li>'+
        '	<li><strong>Gloves:</strong> Measure across palm of your hand from where your thumb and index finger meet.</li>'+
        '	<li><strong>Women\'s Boot Sizing:&nbsp;</strong> Military boots sized for women can be difficult to find. Below is a sizing chart on how to convert a men boot sizes to a women boot sizes.</li>'+
        '</ul>'+
        '<div style="overflow-x:auto;"><table border="0" cellpadding="1" cellspacing="1">'+
        '	<tbody>'+
        '		<tr>'+
        '			<td>'+
        '			<p><strong>Men\'s</strong></p>'+
        '			</td>'+
        '			<td>'+
        '			<p>4</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>4.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>5.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>6</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>6.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>7</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>7.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>8</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>8.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>9</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>9.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>10</p>'+
        '			</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<td>'+
        '			<p><strong>Women\'s</strong></p>'+
        '			</td>'+
        '			<td>'+
        '			<p>6</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>6.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>7</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>7.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>8</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>8.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>9</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>9.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>10</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>10.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>11</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>11.5</p>'+
        '			</td>'+
        '			<td>'+
        '			<p>12</p>'+
        '			</td>'+
        '		</tr>'+
        '	</tbody>'+
        '</table>'+
        '</div>'+
        '</div>'+

        '</div>'+
        '</div>';
        //END



        //TRU-SPEC
        document.getElementById('size-fit-more-brand').innerHTML += 
        '<div class="row sam-static-content-row sam-static-content-row-gray">'+
        '<div class="col-12">'+

        '<h2 id="sf_truspec">TRU-SPEC SIZE CHARTS</h2>'+
        '<ul>'+
        '	<li><a href="#MenTruSpec">Men\'s Apparel</a></li>'+
        '	<li><a href="#WomenTruSpec">Women\'s Apparel</a></li>'+
        '</ul>'+
        '<div>'+
        '<div>'+
        '<h3 id="MenTruSpec">Men\'s Apparel</h3>'+
        '<div style="overflow-x:auto;"><table>'+
        '	<tbody>'+
        '		<tr>'+
        '			<th>Size</th>'+
        '			<th>X-Small</th>'+
        '			<th>Small</th>'+
        '			<th>Medium</th>'+
        '			<th>Large</th>'+
        '			<th>X-Large</th>'+
        '			<th>2X-Large</th>'+
        '			<th>3X-Large</th>'+
        '			<th colspan="1">4X-Large</th>'+
        '			<th colspan="2">5X-Large</th>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Chest</th>'+
        '			<td>30 - 32</td>'+
        '			<td>34 - 36</td>'+
        '			<td>38 - 40</td>'+
        '			<td>42 - 44</td>'+
        '			<td>46 - 48</td>'+
        '			<td>50 - 52</td>'+
        '			<td>54 - 56</td>'+
        '			<td>58 - 60</td>'+
        '			<td>62-64</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Sleeve Regular</th>'+
        '			<th>31 - 32</th>'+
        '			<td>32 - 33</td>'+
        '			<td>33 - 34</td>'+
        '			<td>34 - 35</td>'+
        '			<td>35 - 36</td>'+
        '			<td>36 - 37</td>'+
        '			<td>37 - 38</td>'+
        '			<td>38 - 39</td>'+
        '			<td>39 - 40</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Sleeve Long</th>'+
        '			<th>33 - 34</th>'+
        '			<td>34 - 35</td>'+
        '			<td>35 - 36</td>'+
        '			<td>36 - 37</td>'+
        '			<td>37 - 38</td>'+
        '			<td>38 - 39</td>'+
        '			<td>39 - 40</td>'+
        '			<td>40 - 41</td>'+
        '			<td>41 - 42</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Sleeve Short</th>'+
        '			<th>29 - 30</th>'+
        '			<td>30 - 31</td>'+
        '			<td>31 - 32</td>'+
        '			<td>32 - 33</td>'+
        '			<td>33 - 34</td>'+
        '			<td>34 - 35</td>'+
        '			<td>35 - 36</td>'+
        '			<td>36 - 37</td>'+
        '			<td>37 - 38</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Waist</th>'+
        '			<th>24 - 26</th>'+
        '			<td>28 - 30</td>'+
        '			<td>32 - 34</td>'+
        '			<td>36 - 38</td>'+
        '			<td>40 - 42</td>'+
        '			<td>44 - 46</td>'+
        '			<td>48 - 50</td>'+
        '			<td>52 - 54</td>'+
        '			<td>56 -58</td>'+
        '		</tr>'+
        '	</tbody>'+
        '</table></div>'+
        '</div>'+
        '<div>'+
        '<h3 id="WomenTruSpec">Women\'s Apparel</h3>'+
        '<div style="overflow-x:auto;"><table>'+
        '	<tbody>'+
        '		<tr>'+
        '			<th>Size</th>'+
        '			<th>X-Small</th>'+
        '			<th>Small</th>'+
        '			<th>Medium</th>'+
        '			<th>Large</th>'+
        '			<th>X-Large</th>'+
        '			<th>2X-Large</th>'+
        '			<th>3X-Large</th>'+
        '			<th colspan="1">4X-Large</th>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Bust</th>'+
        '			<td>33 - 34</td>'+
        '			<td>35 - 36</td>'+
        '			<td>37 - 39</td>'+
        '			<td>40 - 42</td>'+
        '			<td>43 - 45</td>'+
        '			<td>46 - 49</td>'+
        '			<td>50 - 53</td>'+
        '			<td>54 - 57</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Sleeve</th>'+
        '			<th>30</th>'+
        '			<td>30.5</td>'+
        '			<td>31</td>'+
        '			<td>32</td>'+
        '			<td>32.5</td>'+
        '			<td>33</td>'+
        '			<td>33.5</td>'+
        '			<td>34</td>'+
        '		</tr>'+
        '	</tbody>'+
        '</table></div>'+
        '<p><strong>Height:</strong></p>'+
        '<p>Regular: 5\'3&quot; - 5\'7&quot;&nbsp; &nbsp;Petite: 5\'3&quot; and under</p>'+
        '<p><strong>Inseam Measurements:</strong></p>'+
        '<p>Unhemmed: 35&quot;</p>'+
        '<div style="overflow-x:auto;"><table>'+
        '	<tbody>'+
        '		<tr>'+
        '			<th>Size</th>'+
        '			<th>2</th>'+
        '			<th>4</th>'+
        '			<th>6</th>'+
        '			<th>8</th>'+
        '			<th>10</th>'+
        '			<th>12</th>'+
        '			<th>14</th>'+
        '			<th colspan="1">16</th>'+
        '			<th>18</th>'+
        '			<th>20</th>'+
        '			<th>22</th>'+
        '			<th>24</th>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Waist</th>'+
        '			<td>27</td>'+
        '			<td>27 - 28</td>'+
        '			<td>28 - 29</td>'+
        '			<td>29 - 30</td>'+
        '			<td>30 - 31</td>'+
        '			<td>31 - 32</td>'+
        '			<td>32 - 33</td>'+
        '			<td>33 - 34</td>'+
        '			<td>34 - 35</td>'+
        '			<td>35 -36</td>'+
        '			<td>36 - 37</td>'+
        '			<td>37 - 38</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Hips</th>'+
        '			<th>37</th>'+
        '			<td>38</td>'+
        '			<td>39</td>'+
        '			<td>40</td>'+
        '			<td>41</td>'+
        '			<td>42</td>'+
        '			<td>44</td>'+
        '			<td>46</td>'+
        '			<td>47</td>'+
        '			<td>49</td>'+
        '			<td>50</td>'+
        '			<td>52</td>'+
        '		</tr>'+
        '	</tbody>'+
        '</table></div>'+
        '</div>'+
        '<div>'+
        '<p><br><strong>Hint:</strong> For the most accurate results, measure yourself in your undergarments.</p>'+
        '<ul>'+
        '	<li><strong>Neck:</strong> Measure around the base of your neck, inserting your forefinger between the tape and your neck to allow ease in fit.</li>'+
        '	<li><strong>Chest:</strong> Measure around the fullest part of your chest, keeping tape firmly under your armpits and around your shoulder blades.</li>'+
        '	<li><strong>Waist:</strong> Measure around your waist, slightly below your natural waist, where you normally wear your pants. Insert your forefinger between the tape and your body to allow ease in fit.</li>'+
        '	<li><strong>Sleeve Length:</strong> Bend your arm slightly. Measure from center back neck, across your shoulder, down to your elbow, down to your wrist.</li>'+
        '	<li><strong>Hip:</strong> Measure around the fullest part of your hips, inserting your forefinger between the tape and your hip to allow ease in fit.</li>'+
        '	<li><strong>Inseam:</strong> Measure a similar pant that fits you well. Measure along the inseam, from the crotch seam to the bottom of the hem.</li>'+
        '	<li><strong>Gloves:</strong> Measure across palm of your hand from where your thumb and index finger meet.</li>'+
        '</ul>'+
        '</div>'+
        '</div>'+

        '</div>'+
        '</div>';
        //END





        //UNDER ARMOUR
        document.getElementById('size-fit-more-brand').innerHTML += 
        '<div class="row sam-static-content-row sam-static-content-row-gray">'+
        '<div class="col-12">'+

        '<h2 id="sf_underarmour">UNDER ARMOUR SIZE CHARTS</h2>'+
        '<ul>'+
        '	<li><a href="#GlovesUA">Tactical Gloves</a></li>'+
        '	<li><a href="#HeadwearUA">Headwear</a></li>'+
        '	<li><a href="#SocksUA">Socks</a></li>'+
        '	<li><a href="#MenFootwearUA">Men\'s Footwear</a></li>'+
        '	<li><a href="#MenApparelUA">Men\'s Apparel</a></li>'+
        '	<li><a href="#WomenApparelUA">Women\'s Apparel</a></li>'+
        '</ul>'+
        '<div>'+
        '<div class="sizechart" id="belts">'+
        '<h3 id="GlovesUA">Glove Size</h3>'+
        '<div style="overflow-x:auto;"><table>'+
        '	<tbody>'+
        '		<tr>'+
        '			<th>Size</th>'+
        '			<th>X-Small</th>'+
        '			<th>Small</th>'+
        '			<th>Medium</th>'+
        '			<th>Large</th>'+
        '			<th>X-Large</th>'+
        '			<th>2X-Large</th>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Palm to Finger</th>'+
        '			<th>6 3/4 - 7</th>'+
        '			<td>7 - 7 1/4</td>'+
        '			<td>7 1/4 - 7 1/2</td>'+
        '			<td>7 1/2 - 7 3/4</td>'+
        '			<td>7 3/4 - 8</td>'+
        '			<td>8 - 8 1/4</td>'+
        '		</tr>'+
        '	</tbody>'+
        '</table></div>'+
        '</div>'+
        '<div>'+
        '<h3 id="HeadwearUA">Headwear</h3>'+
        '<div style="overflow-x:auto;"><table>'+
        '	<tbody>'+
        '		<tr>'+
        '			<th>Size</th>'+
        '			<th>S/M</th>'+
        '			<th>M/L</th>'+
        '			<th>L/XL</th>'+
        '			<th>XL/XXL</th>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Measurement</th>'+
        '			<td>20 7/8 - 21 1/2</td>'+
        '			<td>22 - 23</td>'+
        '			<td>23 - 24 1/4</td>'+
        '			<td>24 1/4 - 25 1/2</td>'+
        '		</tr>'+
        '	</tbody>'+
        '</table></div>'+
        '</div>'+
        '<div>'+
        '<h3 id="SocksUA">Socks</h3>'+
        '<div style="overflow-x:auto;"><table>'+
        '	<tbody>'+
        '		<tr>'+
        '			<th>Size</th>'+
        '			<th>Medium</th>'+
        '			<th>Large</th>'+
        '			<th>X-Large</th>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Boot Size</th>'+
        '			<td>4 - 8.5</td>'+
        '			<td>9 - 12.5</td>'+
        '			<td>13 - 16</td>'+
        '		</tr>'+
        '	</tbody>'+
        '</table></div>'+
        '</div>'+
        '<div>'+
        '<h3 id="MenFootwearUA">Men\'s Footwear</h3>'+
        '<div style="overflow-x:auto;"><table>'+
        '	<tbody>'+
        '		<tr>'+
        '			<th>Size</th>'+
        '			<th>&nbsp; &nbsp; &nbsp;&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '			<th>&nbsp;</th>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>USA</th>'+
        '			<td>7</td>'+
        '			<td>7.5</td>'+
        '			<td>8</td>'+
        '			<td>8.5</td>'+
        '			<td>9</td>'+
        '			<td>9.5</td>'+
        '			<td>10</td>'+
        '			<td>10.5</td>'+
        '			<td>11</td>'+
        '			<td>11.5</td>'+
        '			<td>12</td>'+
        '			<td>12.5</td>'+
        '			<td>13</td>'+
        '			<td>13.5</td>'+
        '			<td>14</td>'+
        '			<td>14.5</td>'+
        '			<td>15</td>'+
        '			<td>15.5</td>'+
        '			<td>16</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>UK</th>'+
        '			<td>6</td>'+
        '			<td>6.5</td>'+
        '			<td>7</td>'+
        '			<td>7.5</td>'+
        '			<td>8</td>'+
        '			<td>8.5</td>'+
        '			<td>9</td>'+
        '			<td>9.5</td>'+
        '			<td>10</td>'+
        '			<td>10.5</td>'+
        '			<td>11</td>'+
        '			<td>11.5</td>'+
        '			<td>12</td>'+
        '			<td>12.5</td>'+
        '			<td>13</td>'+
        '			<td>13.5</td>'+
        '			<td>14</td>'+
        '			<td>14.5</td>'+
        '			<td>15</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>EU</th>'+
        '			<td>40</td>'+
        '			<td>40.5</td>'+
        '			<td>41</td>'+
        '			<td>42</td>'+
        '			<td>42.5</td>'+
        '			<td>43</td>'+
        '			<td>44</td>'+
        '			<td>44.5</td>'+
        '			<td>45</td>'+
        '			<td>45.5</td>'+
        '			<td>46</td>'+
        '			<td>47</td>'+
        '			<td>47.5</td>'+
        '			<td>48</td>'+
        '			<td>48.5</td>'+
        '			<td>49</td>'+
        '			<td>49.5</td>'+
        '			<td>50</td>'+
        '			<td>50.5</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>in</th>'+
        '			<td>9 7/8</td>'+
        '			<td>10</td>'+
        '			<td>10 1/8</td>'+
        '			<td>10 3/8</td>'+
        '			<td>10 5/8</td>'+
        '			<td>10 3/4</td>'+
        '			<td>11</td>'+
        '			<td>11 1/8</td>'+
        '			<td>11 3/8</td>'+
        '			<td>11 5/8</td>'+
        '			<td>11 3/4</td>'+
        '			<td>12</td>'+
        '			<td>12 1/8</td>'+
        '			<td>12 1/4</td>'+
        '			<td>12 5/8</td>'+
        '			<td>12 7/8</td>'+
        '			<td>13</td>'+
        '			<td>13 1/8</td>'+
        '			<td>13 1/4</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>cm</th>'+
        '			<td>25</td>'+
        '			<td>25.5</td>'+
        '			<td>26</td>'+
        '			<td>26.5</td>'+
        '			<td>27</td>'+
        '			<td>27.5</td>'+
        '			<td>28</td>'+
        '			<td>28.5</td>'+
        '			<td>29</td>'+
        '			<td>29.5</td>'+
        '			<td>30</td>'+
        '			<td>30.5</td>'+
        '			<td>31</td>'+
        '			<td>31.5</td>'+
        '			<td>32</td>'+
        '			<td>32.5</td>'+
        '			<td>33</td>'+
        '			<td>33.5</td>'+
        '			<td>34</td>'+
        '		</tr>'+
        '	</tbody>'+
        '</table></div>'+
        '</div>'+
        '<div>'+
        '<h3 id="MenApparelUA">Men\'s Apparel</h3>'+
        '<div style="overflow-x:auto;"><table>'+
        '	<tbody>'+
        '		<tr>'+
        '			<th>Size</th>'+
        '			<th>X-Small</th>'+
        '			<th>Small</th>'+
        '			<th>Medium</th>'+
        '			<th>Large</th>'+
        '			<th>X-Large</th>'+
        '			<th>2X-Large</th>'+
        '			<th>3X-Large</th>'+
        '			<th>4X-Large</th>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Chest</th>'+
        '			<td>30 - 32</td>'+
        '			<td>34 - 36</td>'+
        '			<td>38 - 40</td>'+
        '			<td>43 - 44</td>'+
        '			<td>45 - 48</td>'+
        '			<td>50 - 53</td>'+
        '			<td>54 - 56</td>'+
        '			<td>58 - 60</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Waist</th>'+
        '			<td>26.5 - 27.5</td>'+
        '			<td>28.5 - 30</td>'+
        '			<td>31.5 - 33.5</td>'+
        '			<td>35 - 37</td>'+
        '			<td>39 - 41</td>'+
        '			<td>43 - 45.5</td>'+
        '			<td>47.5 - 50</td>'+
        '			<td>52 - 54.5</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Hip</th>'+
        '			<td>32 - 33</td>'+
        '			<td>34 - 35.5</td>'+
        '			<td>37 - 38.5</td>'+
        '			<td>40 - 42</td>'+
        '			<td>44 - 46</td>'+
        '			<td>48 - 50</td>'+
        '			<td>52 - 54</td>'+
        '			<td>56 - 58</td>'+
        '		</tr>'+
        '	</tbody>'+
        '</table></div>'+
        '<p><strong>Loose:</strong> Fuller cut for complete comfort, total range of motion &amp; greater breathability.</p>'+
        '<p><strong>Fitted:</strong> A slimmer, athletic cut that allows total mobility but eliminates the bulk of extra fabric.</p>'+
        '<p><strong>Compression:</strong> Ultra-tight, second skin fit that keeps you locked in &amp; makes you feel like you can do anything.</p>'+
        '</div>'+
        '<div>'+
        '<h3 id="WomenApparelUA">Women\'s Apparel</h3>'+
        '<div style="overflow-x:auto;"><table>'+
        '	<tbody>'+
        '		<tr>'+
        '			<th>Size</th>'+
        '			<th>X-Small (0-2)</th>'+
        '			<th>Small (4-6)</th>'+
        '			<th>Medium (8-10)</th>'+
        '			<th>Large (12-14)</th>'+
        '			<th>X-Large (16)</th>'+
        '			<th>2X-Large (18)</th>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Bust</th>'+
        '			<td>32.5 - 33.5</td>'+
        '			<td>33.5 - 35.5</td>'+
        '			<td>36.5 - 37.5</td>'+
        '			<td>39 - 40.5</td>'+
        '			<td>42 - 43.5</td>'+
        '			<td>45 - 46.5</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Waist</th>'+
        '			<td>25.5 - 26.5</td>'+
        '			<td>27.5 - 28.5</td>'+
        '			<td>29.5 - 30.5</td>'+
        '			<td>32 - 33.5</td>'+
        '			<td>35 - 36.5</td>'+
        '			<td>38 - 39.5</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Hip</th>'+
        '			<td>34.5 - 35.5</td>'+
        '			<td>36.5 - 37.5</td>'+
        '			<td>38.5 - 39.5</td>'+
        '			<td>41 - 42.5</td>'+
        '			<td>44 - 45.5</td>'+
        '			<td>47 - 48.5</td>'+
        '		</tr>'+
        '	</tbody>'+
        '</table>'+
        '<p>Lose: Fuller cut for complete comfort, total range of motion &amp; greater breathability.</p>'+
        '<p>Semi-fitted: A slimmer, athletic cut that allows total mobility but eliminates the bulk of extra fabric.</p>'+
        '<p>Fitted: Sits close to the skin for a streamlined fit without the squeeze of compression.</p>'+
        '<p>Compression: Ultra-tight, second skin fit that keeps you locked in &amp; makes you feel like you can do anything.</p>'+
        '</div>'+
        '<div>'+
        '<p><br><strong>Hint:</strong> For the most accurate results, measure yourself in your undergarments.</p>'+
        '<ul>'+
        '	<li><strong>Neck:</strong> Measure around the base of your neck, inserting your forefinger between the tape and your neck to allow ease in fit.</li>'+
        '	<li><strong>Chest:</strong> Measure around the fullest part of your chest, keeping tape firmly under your armpits and around your shoulder blades.</li>'+
        '	<li><strong>Waist:</strong> Measure around your waist, slightly below your natural waist, where you normally wear your pants. Insert your forefinger between the tape and your body to allow ease in fit.</li>'+
        '	<li><strong>Sleeve Length:</strong> Bend your arm slightly. Measure from center back neck, across your shoulder, down to your elbow, down to your wrist.</li>'+
        '	<li><strong>Hip:</strong> Measure around the fullest part of your hips, inserting your forefinger between the tape and your hip to allow ease in fit.</li>'+
        '	<li><strong>Inseam:</strong> Measure a similar pant that fits you well. Measure along the inseam, from the crotch seam to the bottom of the hem.</li>'+
        '	<li><strong>Gloves:</strong> Measure across palm of your hand from where your thumb and index finger meet.</li>'+
        '</ul>'+
        '</div>'+
        '</div>'+

        '</div>'+
        '</div>';
        //END




        //USPATRIOT
        document.getElementById('size-fit-more-brand').innerHTML += 
        '<div class="row sam-static-content-row sam-static-content-row-gray">'+
        '<div class="col-12">'+

        '<h2 id="sf_uspatriot">U.S. PATRIOT SIZE CHARTS</h2>'+
        '<ul>'+
        '	<li><a href="#ApparelUSP">PT Army Apparel</a></li>'+
        '	<li><a href="#FleeceUSP">ECWCS Gen III Fleece</a></li>'+
        '	<li><a href="#Level1GenIIIUSP">Level 1 ECWCS Gen III Top and Bottom</a></li>'+
        '	<li><a href="#Level2GenIIIUSP">Level 2 Gen III Top and Bottom</a></li>'+
        '</ul>'+
        '<div>'+
        '<div>'+
        '<h3 id="ApparelUSP">PT Army Apparel</h3>'+
        '<p>Men\'s</p>'+
        '<div style="overflow-x:auto;"><table>'+
        '	<tbody>'+
        '		<tr>'+
        '			<th>Size</th>'+
        '			<th>Small</th>'+
        '			<th>Medium</th>'+
        '			<th>Large</th>'+
        '			<th>X-Large</th>'+
        '			<th>2X-Large</th>'+
        '			<th>3X-Large</th>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Chest</th>'+
        '			<td style="text-align: center;">34 - 36</td>'+
        '			<td style="text-align: center;">38 - 40</td>'+
        '			<td style="text-align: center;">42 - 44</td>'+
        '			<td style="text-align: center;">46 - 48</td>'+
        '			<td style="text-align: center;">50 - 52</td>'+
        '			<td style="text-align: center;">54 - 56</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Waist</th>'+
        '			<td style="text-align: center;">28 - 30</td>'+
        '			<td style="text-align: center;">32 - 34</td>'+
        '			<td style="text-align: center;">36 - 38</td>'+
        '			<td style="text-align: center;">40 - 42</td>'+
        '			<td style="text-align: center;">44 - 46</td>'+
        '			<td style="text-align: center;">48 - 52</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Hips</th>'+
        '			<td style="text-align: center;">34 - 36</td>'+
        '			<td style="text-align: center;">38 - 40</td>'+
        '			<td style="text-align: center;">42 - 44</td>'+
        '			<td style="text-align: center;">46 - 48</td>'+
        '			<td style="text-align: center;">50 - 52</td>'+
        '			<td style="text-align: center;">54 -56</td>'+
        '		</tr>'+
        '	</tbody>'+
        '</table></div>'+
        '<p>Women\'s</p>'+
        '<div style="overflow-x:auto;"><table>'+
        '	<tbody>'+
        '		<tr>'+
        '			<th>Size</th>'+
        '			<th>X-Small</th>'+
        '			<th>Small</th>'+
        '			<th>Medium</th>'+
        '			<th>Large</th>'+
        '			<th>X-Large</th>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Bust</th>'+
        '			<td style="text-align: center;">31 - 32</td>'+
        '			<td style="text-align: center;">33 - 34</td>'+
        '			<td style="text-align: center;">35 - 36</td>'+
        '			<td style="text-align: center;">37 - 38.5</td>'+
        '			<td style="text-align: center;">41</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Waist</th>'+
        '			<td style="text-align: center;">24 - 25</td>'+
        '			<td style="text-align: center;">26 - 27</td>'+
        '			<td style="text-align: center;">28 - 29</td>'+
        '			<td style="text-align: center;">30 - 31.5</td>'+
        '			<td style="text-align: center;">33</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Hips</th>'+
        '			<td style="text-align: center;">33.5 - 34.5</td>'+
        '			<td style="text-align: center;">35.5 - 36.5</td>'+
        '			<td style="text-align: center;">37.5 - 38.5</td>'+
        '			<td style="text-align: center;">39 - 41</td>'+
        '			<td style="text-align: center;">43.5</td>'+
        '		</tr>'+
        '	</tbody>'+
        '</table></div>'+
        '</div>'+
        '<div>'+
        '<h3 id="FleeceUSP">Gen III Fleece</h3>'+
        '<div style="overflow-x:auto;"><table>'+
        '	<tbody>'+
        '		<tr>'+
        '			<th>Size</th>'+
        '			<th>XSR</th>'+
        '			<th>SS</th>'+
        '			<th>SR</th>'+
        '			<th>SL</th>'+
        '			<th>MS</th>'+
        '			<th>MR</th>'+
        '			<th>ML</th>'+
        '			<th>LS</th>'+
        '			<th>LR</th>'+
        '			<th>LL</th>'+
        '			<th>XLS</th>'+
        '			<th>XLR</th>'+
        '			<th>XLL</th>'+
        '			<th>XXLR</th>'+
        '			<th>XXLL</th>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Chest Width</th>'+
        '			<td style="text-align: center;">Up to 32</td>'+
        '			<td style="text-align: center;">33 - 36</td>'+
        '			<td style="text-align: center;">33 - 36</td>'+
        '			<td style="text-align: center;">33 - 36</td>'+
        '			<td style="text-align: center;">37 - 40</td>'+
        '			<td style="text-align: center;">37 - 40</td>'+
        '			<td style="text-align: center;">37 - 40</td>'+
        '			<td style="text-align: center;">41 - 44</td>'+
        '			<td style="text-align: center;">41 - 44</td>'+
        '			<td style="text-align: center;">41 - 44</td>'+
        '			<td style="text-align: center;">45 - 48</td>'+
        '			<td style="text-align: center;">45 - 48</td>'+
        '			<td style="text-align: center;">45 - 48</td>'+
        '			<td style="text-align: center;">49 - 52</td>'+
        '			<td style="text-align: center;">49 - 52</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Sleeve Length</th>'+
        '			<td style="text-align: center;">25&nbsp;</td>'+
        '			<td style="text-align: center;">24 1 /4</td>'+
        '			<td style="text-align: center;">25 1 /4</td>'+
        '			<td style="text-align: center;">26 1 /4</td>'+
        '			<td style="text-align: center;">24 1 /2</td>'+
        '			<td style="text-align: center;">25 1/2</td>'+
        '			<td style="text-align: center;">26 1/2</td>'+
        '			<td style="text-align: center;">24 3 /4</td>'+
        '			<td style="text-align: center;">25 3/4</td>'+
        '			<td style="text-align: center;">26 3/4</td>'+
        '			<td style="text-align: center;">25</td>'+
        '			<td style="text-align: center;">26</td>'+
        '			<td style="text-align: center;">27</td>'+
        '			<td style="text-align: center;">26 1/4</td>'+
        '			<td style="text-align: center;">27 1/4</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Height</th>'+
        '			<td style="text-align: center;">Up to 63</td>'+
        '			<td style="text-align: center;">63 - 67</td>'+
        '			<td style="text-align: center;">67 - 71</td>'+
        '			<td style="text-align: center;">71 - 75</td>'+
        '			<td style="text-align: center;">63 - 67</td>'+
        '			<td style="text-align: center;">71 - 75</td>'+
        '			<td style="text-align: center;">63 - 67</td>'+
        '			<td style="text-align: center;">67 - 71</td>'+
        '			<td style="text-align: center;">71 - 75</td>'+
        '			<td style="text-align: center;">63 - 67</td>'+
        '			<td style="text-align: center;">67 - 71</td>'+
        '			<td style="text-align: center;">71 - 75</td>'+
        '			<td style="text-align: center;">71 - 75</td>'+
        '			<td style="text-align: center;">67 - 71</td>'+
        '			<td style="text-align: center;">71 - 75</td>'+
        '		</tr>'+
        '	</tbody>'+
        '</table></div>'+
        '</div>'+
        '<div>'+
        '<h3 id="Level1GenIIIUSP">Level 1 ECWCS Gen III Top and Bottom</h3>'+
        '<div style="overflow-x:auto;"><table>'+
        '	<tbody>'+
        '		<tr>'+
        '			<th>Size</th>'+
        '			<th>SR</th>'+
        '			<th>MR</th>'+
        '			<th>LR</th>'+
        '			<th>XLR</th>'+
        '			<th>XXLR</th>'+
        '			<th>XXXLR</th>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Chest</th>'+
        '			<td style="text-align: center;">33 - 37</td>'+
        '			<td style="text-align: center;">38 - 41</td>'+
        '			<td style="text-align: center;">42 - 45</td>'+
        '			<td style="text-align: center;">46 - 49</td>'+
        '			<td style="text-align: center;">50 - 53</td>'+
        '			<td style="text-align: center;">54 - 57</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Waist</th>'+
        '			<td style="text-align: center;">27 - 31</td>'+
        '			<td style="text-align: center;">32 - 35</td>'+
        '			<td style="text-align: center;">36 - 39</td>'+
        '			<td style="text-align: center;">40 - 43</td>'+
        '			<td style="text-align: center;">44 - 47</td>'+
        '			<td style="text-align: center;">48 - 51</td>'+
        '		</tr>'+
        '	</tbody>'+
        '</table></div>'+
        '</div>'+
        '<div>'+
        '<h3 id="Level2GenIIIUSP">Level 2 ECWCS Gen III Top and Bottom</h3>'+
        '<div style="overflow-x:auto;"><table>'+
        '	<tbody>'+
        '		<tr>'+
        '			<th>Size</th>'+
        '			<th>SR</th>'+
        '			<th>MR</th>'+
        '			<th>LR</th>'+
        '			<th>XLR</th>'+
        '			<th>XXLR</th>'+
        '			<th>XXXLR</th>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Chest</th>'+
        '			<td style="text-align: center;">34 - 36</td>'+
        '			<td style="text-align: center;">38 - 40</td>'+
        '			<td style="text-align: center;">42 - 44</td>'+
        '			<td style="text-align: center;">46 - 48</td>'+
        '			<td style="text-align: center;">50 - 52</td>'+
        '			<td style="text-align: center;">54 - 56</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Waist</th>'+
        '			<td style="text-align: center;">28 - 30</td>'+
        '			<td style="text-align: center;">32 - 34</td>'+
        '			<td style="text-align: center;">36 - 38</td>'+
        '			<td style="text-align: center;">40 - 42</td>'+
        '			<td style="text-align: center;">44 - 46</td>'+
        '			<td style="text-align: center;">48 - 50</td>'+
        '		</tr>'+
        '	</tbody>'+
        '</table></div>'+
        '</div>'+
        '<div>'+
        '<p><br><strong>Hint:</strong> For the most accurate results, measure yourself in your undergarments.</p>'+
        '<ul>'+
        '	<li><strong>Neck:</strong> Measure around the base of your neck, inserting your forefinger between the tape and your neck to allow ease in fit.</li>'+
        '	<li><strong>Chest:</strong> Measure around the fullest part of your chest, keeping tape firmly under your armpits and around your shoulder blades.</li>'+
        '	<li><strong>Waist:</strong> Measure around your waist, slightly below your natural waist, where you normally wear your pants. Insert your forefinger between the tape and your body to allow ease in fit.</li>'+
        '	<li><strong>Sleeve Length:</strong> Bend your arm slightly. Measure from center back neck, across your shoulder, down to your elbow, down to your wrist.</li>'+
        '	<li><strong>Hip:</strong> Measure around the fullest part of your hips, inserting your forefinger between the tape and your hip to allow ease in fit.</li>'+
        '	<li><strong>Inseam:</strong> Measure a similar pant that fits you well. Measure along the inseam, from the crotch seam to the bottom of the hem.</li>'+
        '	<li><strong>Gloves:</strong> Measure across palm of your hand from where your thumb and index finger meet.</li>'+
        '</ul>'+
        '</div>'+
        '</div>'+

        '</div>'+
        '</div>';
        //END





        //VERTX
        document.getElementById('size-fit-more-brand').innerHTML += 
        '<div class="row sam-static-content-row sam-static-content-row-gray">'+
        '<div class="col-12">'+

        '<h2 id="sf_vertx">VERTX SIZE CHARTS</h2>'+
        '<ul>'+
        '	<li><a href="#ShirtVERTX">Men\'s Shirts</a></li>'+
        '	<li><a href="#PantsVERTX">Men\'s Pants</a></li>'+
        '	<li><a href="#OuterwearVERTX">Outerwear</a></li>'+
        '</ul>'+
        '<div>'+
        '<div>'+
        '<h3 id="ShirtVERTX">Men\'s Shirts</h3>'+
        '<div style="overflow-x:auto;"><table>'+
        '	<tbody>'+
        '		<tr>'+
        '			<th>Size</th>'+
        '			<th>X-Small</th>'+
        '			<th>Small</th>'+
        '			<th>Medium</th>'+
        '			<th>Large</th>'+
        '			<th>X-Large</th>'+
        '			<th>2X-Large</th>'+
        '			<th>3X-Large</th>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Chest</th>'+
        '			<td style="text-align: center;">32 - 34</td>'+
        '			<td style="text-align: center;">34 - 36</td>'+
        '			<td style="text-align: center;">38 - 40</td>'+
        '			<td style="text-align: center;">42 - 44</td>'+
        '			<td style="text-align: center;">46 - 48</td>'+
        '			<td style="text-align: center;">50 - 52</td>'+
        '			<td style="text-align: center;">54 - 56</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Neck</th>'+
        '			<th>13 - 13.5</th>'+
        '			<td style="text-align: center;">14 - 14.5</td>'+
        '			<td style="text-align: center;">15 - 15.5</td>'+
        '			<td style="text-align: center;">16 - 16.5</td>'+
        '			<td style="text-align: center;">17 - 17.5</td>'+
        '			<td style="text-align: center;">18 - 18.5</td>'+
        '			<td style="text-align: center;">19 - 19.5</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Sleeve</th>'+
        '			<th>32</th>'+
        '			<td style="text-align: center;">34</td>'+
        '			<td style="text-align: center;">35</td>'+
        '			<td style="text-align: center;">36</td>'+
        '			<td style="text-align: center;">36</td>'+
        '			<td style="text-align: center;">36</td>'+
        '			<td style="text-align: center;">36</td>'+
        '		</tr>'+
        '	</tbody>'+
        '</table></div>'+
        '</div>'+
        ''+
        '<div>'+
        '<h3 id="PantsVERTX">Men\'s Pants</h3>'+
        '<div style="overflow-x:auto;"><table>'+
        '	<tbody>'+
        '		<tr>'+
        '			<th>Waist</th>'+
        '			<th>28</th>'+
        '			<th>29</th>'+
        '			<th>30</th>'+
        '			<th>31</th>'+
        '			<th>32</th>'+
        '			<th>33</th>'+
        '			<th>34</th>'+
        '			<th colspan="1">35</th>'+
        '			<th>36</th>'+
        '			<th>38</th>'+
        '			<th>40</th>'+
        '			<th>42</th>'+
        '			<th>44</th>'+
        '			<th>46</th>'+
        '			<th>48</th>'+
        '			<th>50</th>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Hip</th>'+
        '			<td style="text-align: center;">38</td>'+
        '			<td style="text-align: center;">39</td>'+
        '			<td style="text-align: center;">40</td>'+
        '			<td style="text-align: center;">41</td>'+
        '			<td style="text-align: center;">42</td>'+
        '			<td style="text-align: center;">43</td>'+
        '			<td style="text-align: center;">44</td>'+
        '			<td style="text-align: center;">45</td>'+
        '			<td style="text-align: center;">46</td>'+
        '			<td style="text-align: center;">48</td>'+
        '			<td style="text-align: center;">50</td>'+
        '			<td style="text-align: center;">52</td>'+
        '			<td style="text-align: center;">54</td>'+
        '			<td style="text-align: center;">56</td>'+
        '			<td style="text-align: center;">58</td>'+
        '			<td style="text-align: center;">60</td>'+
        '		</tr>'+
        '	</tbody>'+
        '</table></div>'+
        '<h3 id="OuterwearVERTX">Outerwear</h3>'+
        '<div style="overflow-x:auto;"><table>'+
        '	<tbody>'+
        '		<tr>'+
        '			<th>Size</th>'+
        '			<th>X-Small</th>'+
        '			<th>Small</th>'+
        '			<th>Medium</th>'+
        '			<th>Large</th>'+
        '			<th>X-Large</th>'+
        '			<th>2X-Large</th>'+
        '			<th>3X-Large</th>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Chest</th>'+
        '			<td style="text-align: center;">32 - 34</td>'+
        '			<td style="text-align: center;">36 - 38</td>'+
        '			<td style="text-align: center;">40 - 42</td>'+
        '			<td style="text-align: center;">44 - 46</td>'+
        '			<td style="text-align: center;">48 - 50</td>'+
        '			<td style="text-align: center;">52 - 54</td>'+
        '			<td style="text-align: center;">56 - 58</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Sleeve</th>'+
        '			<th>33</th>'+
        '			<td style="text-align: center;">34</td>'+
        '			<td style="text-align: center;">35</td>'+
        '			<td style="text-align: center;">36</td>'+
        '			<td style="text-align: center;">37</td>'+
        '			<td style="text-align: center;">38</td>'+
        '			<td style="text-align: center;">39</td>'+
        '		</tr>'+
        '	</tbody>'+
        '</table></div>'+
        '</div>'+
        '<div>'+
        '<p><br><strong>Hint:</strong> For the most accurate results, measure yourself in your undergarments.</p>'+
        '<ul>'+
        '	<li><strong>Neck:</strong> Measure around the base of your neck, inserting your forefinger between the tape and your neck to allow ease in fit.</li>'+
        '	<li><strong>Chest:</strong> Measure around the fullest part of your chest, keeping tape firmly under your armpits and around your shoulder blades.</li>'+
        '	<li><strong>Waist:</strong> Measure around your waist, slightly below your natural waist, where you normally wear your pants. Insert your forefinger between the tape and your body to allow ease in fit.</li>'+
        '	<li><strong>Sleeve Length:</strong> Bend your arm slightly. Measure from center back neck, across your shoulder, down to your elbow, down to your wrist.</li>'+
        '	<li><strong>Hip:</strong> Measure around the fullest part of your hips, inserting your forefinger between the tape and your hip to allow ease in fit.</li>'+
        '	<li><strong>Inseam:</strong> Measure a similar pant that fits you well. Measure along the inseam, from the crotch seam to the bottom of the hem.</li>'+
        '	<li><strong>Gloves:</strong> Measure across palm of your hand from where your thumb and index finger meet.</li>'+
        '</ul>'+
        '</div>'+
        '</div>'+

        '</div>'+
        '</div>';
        //END




        //WILEYX
        document.getElementById('size-fit-more-brand').innerHTML += 
        '<div class="row sam-static-content-row sam-static-content-row-gray">'+
        '<div class="col-12">'+
        '<h2 id="sf_wileyx">WILEY X SIZE CHARTS</h2>'+
        '<div>'+
        '<div>'+
        '<h3>Gloves Size</h3>'+
        '<div style="overflow-x:auto;"><table>'+
        '	<tbody>'+
        '		<tr>'+
        '			<th>Size</th>'+
        '			<th>Small</th>'+
        '			<th>Medium</th>'+
        '			<th>Large</th>'+
        '			<th>X-Large</th>'+
        '			<th>2X-Large</th>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Measurement (in)</th>'+
        '			<td style="text-align: center;">8</td>'+
        '			<td style="text-align: center;">9</td>'+
        '			<td style="text-align: center;">10</td>'+
        '			<td style="text-align: center;">11</td>'+
        '			<td style="text-align: center;">12</td>'+
        '		</tr>'+
        '	</tbody>'+
        '</table></div>'+
        '</div>'+
        '<div>'+
        '<p><br><strong>Hint:</strong> For the most accurate results, measure yourself in your undergarments.</p>'+
        '<ul>'+
        '	<li><strong>Neck:</strong> Measure around the base of your neck, inserting your forefinger between the tape and your neck to allow ease in fit.</li>'+
        '	<li><strong>Chest:</strong> Measure around the fullest part of your chest, keeping tape firmly under your armpits and around your shoulder blades.</li>'+
        '	<li><strong>Waist:</strong> Measure around your waist, slightly below your natural waist, where you normally wear your pants. Insert your forefinger between the tape and your body to allow ease in fit.</li>'+
        '	<li><strong>Sleeve Length:</strong> Bend your arm slightly. Measure from center back neck, across your shoulder, down to your elbow, down to your wrist.</li>'+
        '	<li><strong>Hip:</strong> Measure around the fullest part of your hips, inserting your forefinger between the tape and your hip to allow ease in fit.</li>'+
        '	<li><strong>Inseam:</strong> Measure a similar pant that fits you well. Measure along the inseam, from the crotch seam to the bottom of the hem.</li>'+
        '	<li><strong>Gloves:</strong> Measure across palm of your hand from where your thumb and index finger meet.</li>'+
        '</ul>'+
        '</div>'+
        '</div>'+

        '</div>'+
        '</div>';
        //END






        //XGO
        document.getElementById('size-fit-more-brand').innerHTML += 
        '<div class="row sam-static-content-row sam-static-content-row-gray">'+
        '<div class="col-12">'+

        '<h2 id="sf_xgo">XGO SIZE CHARTS</h2>'+
        '<div>'+
        '<div>'+
        '<h3>Men\'s Tops</h3>'+
        '<div style="overflow-x:auto;"><table>'+
        '	<tbody>'+
        '		<tr>'+
        '			<th>Size</th>'+
        '			<th>Small</th>'+
        '			<th>Medium</th>'+
        '			<th>Large</th>'+
        '			<th>X-Large</th>'+
        '			<th>2X-Large</th>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Chest</th>'+
        '			<td style="text-align: center;">34 - 36</td>'+
        '			<td style="text-align: center;">38 - 40</td>'+
        '			<td style="text-align: center;">42 - 44</td>'+
        '			<td style="text-align: center;">46 - 48</td>'+
        '			<td style="text-align: center;">50 - 52</td>'+
        '		</tr>'+
        '		<tr>'+
        '			<th>Waist</th>'+
        '			<td style="text-align: center;">28 - 30</td>'+
        '			<td style="text-align: center;">32 - 34</td>'+
        '			<td style="text-align: center;">36 - 38</td>'+
        '			<td style="text-align: center;">40 - 42</td>'+
        '			<td style="text-align: center;">44 - 46</td>'+
        '		</tr>'+
        '	</tbody>'+
        '</table></div>'+
        '</div>'+
        '<div>'+
        '<p><br><strong>Hint:</strong> For the most accurate results, measure yourself in your undergarments.</p>'+
        '<ul>'+
        '	<li><strong>Neck:</strong> Measure around the base of your neck, inserting your forefinger between the tape and your neck to allow ease in fit.</li>'+
        '	<li><strong>Chest:</strong> Measure around the fullest part of your chest, keeping tape firmly under your armpits and around your shoulder blades.</li>'+
        '	<li><strong>Waist:</strong> Measure around your waist, slightly below your natural waist, where you normally wear your pants. Insert your forefinger between the tape and your body to allow ease in fit.</li>'+
        '	<li><strong>Sleeve Length:</strong> Bend your arm slightly. Measure from center back neck, across your shoulder, down to your elbow, down to your wrist.</li>'+
        '	<li><strong>Hip:</strong> Measure around the fullest part of your hips, inserting your forefinger between the tape and your hip to allow ease in fit.</li>'+
        '	<li><strong>Inseam:</strong> Measure a similar pant that fits you well. Measure along the inseam, from the crotch seam to the bottom of the hem.</li>'+
        '	<li><strong>Gloves:</strong> Measure across palm of your hand from where your thumb and index finger meet.</li>'+
        '</ul>'+
        '</div>'+
        '</div>'+

        '</div>'+
        '</div>';
        //END







        
        //DOESNT FIT? SECTION
        document.getElementById('size-fit-more-brand').innerHTML += 
        '<div class="row sam-static-content-row sam-static-content-row-gray">'+
        '<div class="col-12">'+

        '<h2>Doesn\'t Fit?</h2>'+
        '<p>If it doesn\'t fit, return it within 28 days, as long as it\'s unworn, unwashed and unaltered.<br />'+
        '<a href="/pages/returns">See Returns Policy</a></p>'+
        '<br>'+
        '<h2>Between Sizes?</h2>'+
        '<p>If your measurements are in between those listed in the size chart, pick the next larger size.</p>'+

        '</div>'+
        '</div><br><br>';
        //END






        // //BRAND_NAME
        // document.getElementById('size-fit-more-brand').innerHTML += 
        // '<div class="row sam-static-content-row sam-static-content-row-gray">'+
        // '<div class="col-12">'+


        // '</div>'+
        // '</div>';
        // //END



        //Overflow Table Format
        //<div style="overflow-x:auto;"><table>


    }

});