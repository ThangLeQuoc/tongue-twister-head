import { OnInit, OnChanges, Component, Input } from "@angular/core";
import { CHART_OPTIONS } from "../technical/google-chart-option";

declare var google: any

google.charts.load('current', { 'packages': ['gauge'] });

@Component({
    selector: 'google-gauge-chart',
    templateUrl: './google-chart.component.html',
    styles: [`
        #chart_div {
    width: 43%;
    margin: auto;
}
    `]
})

export class GoogleChartComponent implements OnInit, OnChanges {
    @Input() numberOfTwister: number;

    private chartOption = CHART_OPTIONS.option;
    private chart: any;

    ngOnInit() {
        google.charts.load('current', { 'packages': ['gauge'] });
        google.charts.setOnLoadCallback(() => this.draw());
    }

    ngOnChanges() {
        if (this.chart == null) {
            google.charts.setOnLoadCallback(() => {
                this.chart = new google.visualization.Gauge(document.getElementById('chart_div'));
                this.draw();
            });
        }
        google.charts.setOnLoadCallback(() => this.draw());
    }

    private draw() {
        var data = google.visualization.arrayToDataTable([
            ['Label', 'Value'],
            ['Twisters', this.numberOfTwister]
        ]);
        //let chart = new google.visualization.Gauge(document.getElementById('chart_div'));
        this.chart.draw(data, this.chartOption);
    }


}