<?php
// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

class block_loremipsumgen extends block_base {
    public function init() {
        $this->title = get_string('loremipsumgen', 'block_loremipsumgen');
        $allowhtml = get_config('loremipsumgen', 'Allow_HTML');
    }

    public function specialization() {
        if (isset($this->config)) {
            if (empty($this->config->title)) {
                $this->title = get_string('defaulttitle', 'block_loremipsumgen');
            } else {
                $this->title = $this->config->title;
            }
            if (empty($this->config->text)) {
                $this->config->text = get_string('defaulttext', 'block_loremipsumgen');
            }
        }
    }

    public function get_content() {
        global $PAGE, $CFG;

        if ($this->content !== null) {
            return $this->content;
        }
        $this->content = new stdClass;
        $PAGE->requires->js('/blocks/loremipsumgen/loremipsumgen.js');
        $this->content->text = file_get_contents($CFG->dirroot . '/blocks/loremipsumgen/loremipsumgen.html');
        return $this->content;
    }

    public function html_attributes() {
        $attributes = parent::html_attributes();
        $attributes['class'] .= ' block_'. $this->name();
        return $attributes;
    }

    // Not allow multiple instances of the block to be made.
    public function instance_allow_multiple() {
        return false;
    }

    public function has_config() {
        return true;
    }

    // Return to default implementation after possibly stripping html tags from the content.
    public function instance_config_save($data, $nolongerused =false) {
        if (get_config('loremipsumgen', 'Allow_HTML') == '1') {
            $data->text = strip_tags($data->text);
        }
        return parent::instance_config_save($data, $nolongerused);
    }
}
