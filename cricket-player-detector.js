
document.querySelector("img").addEventListener("click", function(e)
{
        // Calculate positions as percentages of the image to work at any size
        let percentX = (e.offsetX / this.width) * 100;
        let percentY = (e.offsetY / this.height) * 100;


        let shubham_x = percentX >= 5.2 && percentX <= 15.9;
        let shubham_y = percentY >= 11.7 && percentY <= 49.3;
    
        let hardik_x = percentX >= 19.4 && percentX <= 29.6;
        let hardik_y = percentY >= 12.9 && percentY <= 31.7;
    
        let rishab_x = percentX >= 16.4 && percentX <= 26.3;
        let rishab_y = percentY >= 35.4 && percentY <= 57.1;
    
        let shreyas_x = percentX >= 35.3 && percentX <= 45.4;
        let shreyas_y = percentY >= 14.9 && percentY <= 31.3;
    
        let parag_x = percentX >= 29.7 && percentX <= 38.1;
        let parag_y = percentY >= 35.6 && percentY <= 55.9;
    
        let ruthuraj_x = percentX >= 57.8 && percentX <= 64.7;
        let ruthuraj_y = percentY >= 21.4 && percentY <= 34.3;
    
        let kishan_x = percentX >= 67 && percentX <= 73.9;
        let kishan_y = percentY >= 22.1 && percentY <= 35;
    
        let rajath_x = percentX >= 58.8 && percentX <= 66.5;
        let rajath_y = percentY >= 44.3 && percentY <= 55;
    
        let axar_x = percentX >= 74 && percentX <= 82.1;
        let axar_y = percentY >= 35 && percentY <= 51.4;
    
        let rahan_x = percentX >= 79.8 && percentX <= 86.1;
        let rahan_y = percentY >= 18.3 && percentY <= 36.9;


            if (shubham_x && shubham_y) {
                document.getElementById("res").innerHTML = "🏏 Shubman Gill - Opening Batsman";

            } else if (hardik_x && hardik_y) {
                document.getElementById("res").innerHTML = "🏏 Hardik Pandya - All-rounder";

            } else if (rishab_x && rishab_y) {
                document.getElementById("res").innerHTML = "🏏 Rishab Pant - Wicket Keeper";

            } else if (shreyas_x && shreyas_y) {
                document.getElementById("res").innerHTML = "🏏 Shreyas Iyer - Middle Order";
                
            } else if (parag_x && parag_y) {
                document.getElementById("res").innerHTML = "🏏 Riyan Parag - All-rounder";

            } else if (ruthuraj_x && ruthuraj_y) {
                document.getElementById("res").innerHTML = "🏏 Ruturaj Gaikwad - Opening Batsman";

            } else if (kishan_x && kishan_y) {
                document.getElementById("res").innerHTML = "🏏 Ishan Kishan - Left-handed Batsman";

            } else if (rajath_x && rajath_y) {
                document.getElementById("res").innerHTML = "🏏 Rajath Patidar - Middle Order";

            } else if (axar_x && axar_y) {
                document.getElementById("res").innerHTML = "🏏 Axar Patel - All-rounder";

            } else if (rahan_x && rahan_y) {
                document.getElementById("res").innerHTML = "🏏 Ajinkya Rahane - Senior Batsman";
                
            }
    })